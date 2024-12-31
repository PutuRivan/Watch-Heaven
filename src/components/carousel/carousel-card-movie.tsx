import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CardMovie from "../cards/card-movie";
import CardSkeleton from "../skeletons/card-skeleton";
import { TMovie } from "@/types";

interface Props {
  movies: TMovie[];
  loading?: boolean;
  error?: Error | null;
}

const CarouselCardsMovie = ({ movies, loading, error }: Props) => {
  if (loading) {
    return <CardSkeleton />;
  }
  return (
    <Carousel className="w-full">
      <CarouselContent className="flex justify-center">
        {movies?.map((movie, index) => (
          <CarouselItem
            key={index}
            className="md:basis-1/3 lg:basis-1/6 sm:1/1"
          >
            <CardMovie data={movie} loading={loading} error={error} />
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

export default CarouselCardsMovie;
