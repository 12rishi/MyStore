import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { FaStore } from "react-icons/fa";
import { icons } from "lucide-react";

const Logo = () => {
  return (
    <Button asChild variant="outline" size="icon">
      <Link href="/">
        <FaStore className="w-6 h-6 text-blue-300" />
      </Link>
    </Button>
  );
};

export default Logo;
