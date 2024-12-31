import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CardSkeleton from "../skeletons/card-skeleton";
import { TTv } from "@/types";
import CardTV from "../cards/card-tv";

interface Props {
  tv: TTv[];
  loading?: boolean;
  error?: Error | null;
}

const CarouselCardsTV = ({ tv, loading, error }: Props) => {
  if (loading) {
    return <CardSkeleton />;
  }
  return (
    <Carousel className="w-full">
      <CarouselContent className="flex justify-center">
        {tv?.map((tv, index) => (
          <CarouselItem
            key={index}
            className="md:basis-1/3 lg:basis-1/6 sm:1/1"
          >
            <CardTV data={tv} loading={loading} error={error} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="sm:hidden md:block">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
};

export default CarouselCardsTV;
