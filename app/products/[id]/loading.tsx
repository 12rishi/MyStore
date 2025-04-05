import React from "react";

import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

const LoadingContainer = () => {
  return (
    <div className="mt-20">
      <ProductCardSkeleton />
    </div>
  );
  function ProductCardSkeleton() {
    return (
      <Card className="w-[60vw] h-full">
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
