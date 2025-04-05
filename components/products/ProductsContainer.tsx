import React from "react";
import ProductGrid from "./ProductsGrid";
import ProductList from "./ProductsList";
import { Button } from "../ui/button";
import { LuLayoutGrid, LuLayoutList } from "react-icons/lu";
import { fetchAllProducts } from "@/utils/action";
import { Separator } from "../ui/separator";
import Link from "next/link";

const ProductsContainer = async ({
  layout,
  search,
}: {
  layout?: string;
  search?: string;
}) => {
  const products = await fetchAllProducts({ searchParams: search || "" });
  const totalLength = products.length;
  const searchTerm = search ? `&search=${search}` : "";
  if (totalLength === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl font-bold">No products found</h1>
      </div>
    );
  }
  return (
    <>
      <section className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">{totalLength} Products</h1>
        </div>
        <div className="flex gap-2">
          <Button
            variant={layout === "grid" ? "default" : "outline"}
            size="icon"
            asChild
          >
            <Link href={`/products?layout=grid${searchTerm}`}>
              <LuLayoutGrid />
            </Link>
          </Button>
          <Button
            variant={layout === "list" ? "default" : "outline"}
            size="icon"
            asChild
          >
            <Link href={`/products?layout=list${searchTerm}`}>
              <LuLayoutList />
            </Link>
          </Button>
        </div>
      </section>
      <Separator className="mt-4" />
      <div>
        {layout === "grid" ? (
          <ProductGrid products={products} />
        ) : (
          <ProductList products={products} />
        )}
      </div>
    </>
  );
};

export default ProductsContainer;
