import React from "react";
import { Button } from "../ui/button";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";

const CartButton = () => {
  return (
    <Button asChild variant="outline" size="icon" className="relative">
      <Link href="/cart">
        <FaShoppingCart className="w-6 h-6" />
        <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-blue-500 rounded-full">
          9
        </span>
      </Link>
    </Button>
  );
};

export default CartButton;
