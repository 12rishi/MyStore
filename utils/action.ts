"use server";

import db from "./db";

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

export const fetchAllProducts = async () => {
  try {
    const allProducts = await db.product.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return allProducts;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch all products");
  }
};
