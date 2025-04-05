import React from "react";
import { Button } from "../ui/button";

const AddToCart = ({ productId }: { productId: string }) => {
  return (
    <div>
      <Button variant="default" size="lg" className="cursor-pointer">
        Add To Cart
      </Button>
    </div>
  );
};

export default AddToCart;
