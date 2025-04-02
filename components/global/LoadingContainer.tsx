import React from "react";
import { Card, CardContent } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

const LoadingContainer = () => {
  return (
    <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <ProductCardSkeleton />
      <ProductCardSkeleton />
      <ProductCardSkeleton />
    </div>
  );
  function ProductCardSkeleton() {
    return (
      <Card>
        <CardContent className="p-4 flex flex-col gap-4">
          <Skeleton className="h-48 w-full rounded-lg" />
          <Skeleton className="h-4 w-3/4 rounded-lg" />
          <Skeleton className="h-2 w-1/2 rounded-lg" />
        </CardContent>
      </Card>
    );
  }
};

export default LoadingContainer;
