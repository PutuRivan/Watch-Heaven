import React from "react";

const CardSkeleton = () => {
  return (
    <div className="space-y-4">
      {/* Card Image Skeleton */}
      <div className="h-40 w-full bg-gray-300 rounded-md animate-pulse" />
      {/* Card Name Skeleton */}
      <div className="h-6 w-full bg-gray-300 rounded-md animate-pulse" />
    </div>
  );
};

export default CardSkeleton;
