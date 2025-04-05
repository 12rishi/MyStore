import BreadCrumb from "@/components/single-product/BreadCrumb";
import Rating from "@/components/single-product/Rating";
import { fetchSingleProduct } from "@/utils/action";
import { Adamina } from "next/font/google";
import React from "react";
import AddToCart from "@/components/single-product/AddToCart";
import { formatCurrency } from "@/utils/format";
import Image from "next/image";
import FavouriteToggleButton from "@/components/products/FavouriteToggleButton";

const SingleProductPage = async ({ params }: { params: { id: string } }) => {
  const product = await fetchSingleProduct(params.id);
  const { name, price, description, image, company } = product;
  const currency = formatCurrency(Number(price));
  return (
    <section className="container w-full h-[calc(100vh-100px)] shadow-md shadow-primary/40 rounded-lg p-4 overflow-hidden">
      <BreadCrumb name={name} />
      <div className="flex   gap-8 mt-4 h-full">
        <div className="w-1/2 h-auto relative rounded-lg">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover absolute rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <h1 className="text-2xl font-bold">{name}</h1>
            <div>
              <FavouriteToggleButton productId={params.id} />
            </div>
          </div>
          <Rating productId={params.id} />
          <p>{company}</p>
          <p className="text-muted-foreground">{currency}</p>
          <p>{description}</p>
          <AddToCart productId={params.id} />
        </div>
      </div>
    </section>
  );
};

export default SingleProductPage;
