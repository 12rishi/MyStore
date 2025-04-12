"use server";

import { redirect } from "next/navigation";
import db from "./db";
import { currentUser } from "@clerk/nextjs/server";
import { imageSchema, productSchema, validateZodSchema } from "./zodSchema";
import { uploadImage } from "./supabaseStorage";
import { revalidatePath } from "next/cache";
const checkUser = async () => {
  const user = await currentUser();
  if (!user) {
    redirect("/");
  }
  return user;
};
const checkError = ({ error }: { error: unknown }) => {
  return {
    message:
      error instanceof Error ? error.message : "failed to create product",
  };
};
const isAdmin = async () => {
  const user = await currentUser();
  if (user?.id !== process.env.ADMIN_ID) {
    redirect("/");
  }
  return user;
};
// Fetching data with Prisma (inside API route or server-side function)
export const fetchFeaturedProduct = async () => {
  try {
    const featuredProduct = await db.product.findMany({
      where: {
        featured: true,
      },
    });

    // Convert Decimal to number for all product items
    const products = featuredProduct.map((product: any) => {
      return {
        ...product,
        price: product.price.toNumber(), // Convert Decimal to plain number
      };
    });

    return products;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch featured product");
  }
};

export const fetchAllProducts = async ({
  searchParams = "",
}: {
  searchParams: string;
}) => {
  try {
    const allProducts = await db.product.findMany({
      orderBy: {
        createdAt: "desc",
      },
      where: {
        OR: [
          { name: { contains: searchParams, mode: "insensitive" } },
          { company: { contains: searchParams, mode: "insensitive" } },
        ],
      },
    });
    return allProducts;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch all products");
  }
};
export const fetchSingleProduct = async (id: string) => {
  try {
    const singleProduct = await db.product.findUnique({
      where: {
        id,
      },
    });
    if (!singleProduct) {
      redirect("/products");
    }
    return singleProduct;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch single product");
  }
};
export async function createProductAction(prevState: any, formData: FormData) {
  try {
    const user = await checkUser();
    const data = Object.fromEntries(formData);
    const file = formData.get("image") as File;
    const validatedFields = validateZodSchema(productSchema, data);
    const validateImage = validateZodSchema(imageSchema, {
      image: file,
    });
    const imageUrl = await uploadImage(validateImage.image);
    console.log("imageUrl is", imageUrl);

    await db.product.create({
      data: {
        ...validatedFields,
        clerkId: user.id,
        image: imageUrl,
      },
    });
  } catch (error) {
    return checkError({ error });
  }
  redirect("/admin/products");
}
export const fetchAdminProducts = async () => {
  await isAdmin();
  const products = await db.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return products;
};
export const deleteProduct = async (prevState: { productId: string }) => {
  const { productId } = prevState;
  await isAdmin();
  try {
    await db.product.delete({
      where: { id: productId },
    });
    revalidatePath("/admin/products");
    return { message: "Product deleted successfully" };
  } catch (error) {
    return checkError({ error });
  }
};
