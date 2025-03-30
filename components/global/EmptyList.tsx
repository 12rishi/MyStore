import { cn } from "@/lib/utils";
import React from "react";

const EmptyList = ({
  heading = "No items found....",
  className,
}: {
  heading?: string;
  className?: string;
}) => {
  return (
    <h2 className={cn("text-center text-2xl font-bold", className)}>
      {heading}
    </h2>
  );
};

export default EmptyList;
