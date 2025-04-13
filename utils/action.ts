"use server";

import { redirect } from "next/navigation";
import db from "./db";
import { currentUser } from "@clerk/nextjs/server";
import { imageSchema, productSchema, validateZodSchema } from "./zodSchema";
import { deleteProductImage, uploadImage } from "./supabaseStorage";
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
    const product = await db.product.delete({
      where: { id: productId },
    });
    if (product) {
      await deleteProductImage(product.image);
    }
    revalidatePath("/admin/products");
    return { message: "Product deleted successfully" };
  } catch (error) {
    return checkError({ error });
  }
};
export const fetchAdminProductDetail = async (productId: string) => {
  await isAdmin();
  const product = await db.product.findUnique({
    where: { id: productId },
  });
  if (!product) {
    redirect("/admin/products");
  }
  return product;
};
export const updateProductAction = async (
  prevState: any,
  formData: FormData
) => {
  try {
    await isAdmin();
    const id = formData.get("id") as string;

    const data = Object.fromEntries(formData);
    const file = formData.get("image") as File;
    const validatedFields = validateZodSchema(productSchema, data);

    await db.product.update({
      where: { id },
      data: {
        ...validatedFields,
      },
    });
    revalidatePath("/admin/products/edit/" + id);
  } catch (error) {
    return checkError({ error });
  }
  return { message: "Product updated successfully" };
};
export const updateProductImageAction = async (
  prevState: any,
  formData: FormData
) => {
  try {
    await isAdmin();
    const id = formData.get("id") as string;
    const file = formData.get("image") as File;
    const imageUrl = formData.get("imageUrl") as string;
    const validatedFields = validateZodSchema(imageSchema, {
      image: file,
    });
    const newImageUrl = await uploadImage(validatedFields.image);
    if (imageUrl) {
      await deleteProductImage(imageUrl);
    }
    await db.product.update({
      where: { id },
      data: { image: newImageUrl },
    });
    revalidatePath("/admin/products/edit/" + id);
    return { message: "Product image updated successfully" };
  } catch (error) {
    return checkError({ error });
  }
};
