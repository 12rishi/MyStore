// app/components/FeaturedProduct.tsx
"use client";

import { useState, useEffect } from "react";
import SectionTitle from "../global/SectionTitle";
import ProductsGrid from "../products/ProductsGrid";
import { fetchFeaturedProduct } from "@/utils/action";
import EmptyList from "../global/EmptyList";

import LoadingContainer from "../global/LoadingContainer";

export default function FeaturedProduct() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchFeaturedProduct();
      setProducts(data as any);
      console.log("product is", products);
      setLoading(false);
    };
    loadProducts();
  }, []);

  if (loading) return <LoadingContainer />;

  if (products.length === 0) return <EmptyList />;

  return (
    <section className="pt-24">
      <SectionTitle text="Featured Product" />

      <ProductsGrid products={products} />
    </section>
  );
}
