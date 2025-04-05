import React from "react";
import { Product } from "@prisma/client";
import { formatCurrency } from "@/utils/format";
import Link from "next/link";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import FavouriteToggleButton from "./FavouriteToggleButton";
const ProductsGrid = ({ products }: { products: Product[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-12">
      {products.map((product) => {
        const { name, price, image, id: ProductId } = product;
        console.log("product is", product);
        const dollarPrice = formatCurrency(Number(price));
        return (
          <article key={ProductId} className="group relative">
            <Link href={`/products/${ProductId}`}>
              <Card className="transform group-hover:shadow-xl transition-shadow duration-500">
                <CardContent>
                  <div className="relative h-64 md:h-48 overflow-hidden rounded-lg ">
                    <Image
                      src={image}
                      alt={name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority
                      className=" rounded w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="text-lg capitalize font-medium">{name}</h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      {dollarPrice}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
            <div className="absolute top-8 right-7">
              <FavouriteToggleButton productId={ProductId} />
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default ProductsGrid;
