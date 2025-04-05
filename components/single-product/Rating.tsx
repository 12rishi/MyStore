import React from "react";
import { FaStar } from "react-icons/fa";
const Rating = ({ productId }: { productId: string }) => {
  const totalRating = 5;
  const totalReview = 25;
  const ratingArray = Array.from({ length: totalRating }, (_, index) => {
    return (
      <div key={index} className="text-yellow-500 flex gap-1">
        <FaStar />
      </div>
    );
  });
  return (
    <div>
      <div className="flex gap-1 items-center">
        {ratingArray}
        <span>({totalReview})</span>
      </div>
    </div>
  );
};

export default Rating;
