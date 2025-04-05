import { Product } from "@prisma/client";
import React from "react";

import { formatCurrency } from "@/utils/format";
import Link from "next/link";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import FavouriteToggleButton from "./FavouriteToggleButton";
const ProductsList = ({ products }: { products: Product[] }) => {
  return (
    <article className="grid grid-cols-1 gap-10 pt-12 w-full">
      {products.map((product) => {
        const currency = formatCurrency(Number(product.price));
        return (
          <div key={product.id} className="relative group ">
            <Link href={`/products/${product.id}`}>
              <Card className="group-hover:shadow-xl transition-shadow duration-500">
                <CardContent>
                  <div className="flex gap-4">
                    <div className="relative h-48 md:h-64 w-48  overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        priority
                        fill
                        sizes="(max-width: 768px) 20vw, (max-width: 1200px) 50vw, 33vw"
                        className="w-full h-full object-cover rounded-lg absolute group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h1 className="text-lg font-bold">{product.name}</h1>
                      <p className="text-sm text-muted-foreground">
                        {product.description}
                      </p>
                      <p className="text-lg font-bold">{currency}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <div className="absolute bottom-8 right-7">
              <FavouriteToggleButton productId={product.id} />
            </div>
          </div>
        );
      })}
    </article>
  );
};

export default ProductsList;
