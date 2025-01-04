import { TAll } from "@/types";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Cards from "./cards";

interface Props {
  datas: TAll[];
  loading: boolean;
  error?: Error | null | boolean;
  category: string;
}

const Carousels = ({ datas, loading, error, category }: Props) => {
  return (
    <Carousel className="w-full">
      <CarouselContent className="flex justify-center">
        {datas?.map((data, index) => (
          <CarouselItem
            key={index}
            className="md:basis-1/3 lg:basis-1/6 sm:1/1"
          >
            <Cards
              data={data}
              loading={loading}
              error={error}
              category={category}
            />
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

export default Carousels;
