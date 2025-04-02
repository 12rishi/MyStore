import React from "react";
import hero1 from "@/public/images/hero1.jpg";
import hero2 from "@/public/images/hero2.jpg";
import hero3 from "@/public/images/hero3.jpg";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Car } from "lucide-react";
import { Card, CardContent } from "../ui/card";

const images = [hero1, hero2, hero3];

const HeroCarousel = () => {
  return (
    <div className="hidden lg:block">
      <Carousel>
        <CarouselContent>
          {images.map((image, index) => (
            <>
              <CarouselItem key={image.src}>
                <Card>
                  <CardContent className="p-2">
                    <Image
                      src={image}
                      alt={`Hero ${index + 1}`}
                      className="w-full rounded-sm object-cover  brightness-50"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            </>
          ))}
        </CarouselContent>
        <CarouselPrevious variant="outline" />
        <CarouselNext variant="outline" />
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
