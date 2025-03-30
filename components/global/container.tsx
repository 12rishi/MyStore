import { cn } from "@/lib/utils";
import React from "react";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "mx-auto  max-w-6xl  px-2.5 xl:max-w-7xl md:px-20",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
