import React from "react";
import HeroCarousel from "./HeroCarousel";
import { Button } from "../ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 items-center  gap-36 ">
      <div className="flex flex-col gap-6">
        <h1 className="text-4xl font-bold tracking-normal">
          We Are Changing The Way People Shop
        </h1>
        <p className="text-muted-foreground leading-relaxed">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
          praesentium eveniet corporis! Eos, earum? Rerum enim amet quos
          necessitatibus, nemo cumque harum facere ad!
        </p>
        <Button
          asChild
          className="bg-blue-400 hover:bg-blue-500 max-w-fit"
          variant="ghost"
          size="lg"
        >
          <Link href="/products">Our Products</Link>
        </Button>
      </div>
      <HeroCarousel />
    </section>
  );
};

export default Hero;
