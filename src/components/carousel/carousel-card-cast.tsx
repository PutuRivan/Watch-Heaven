import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CardCast from "../cards/card-people";
import { api } from "@/lib/axios";
import { TMovieCast } from "@/types";

interface Props {
  id: number;
}

const CarouselCastMovie = ({ id }: Props) => {
  const [CastMovie, setCastMovie] = useState<TMovieCast[]>();
  const [CastMovieLoading, setCastMovieLoading] = useState(false);
  const [CastMovieError, setCastMovieError] = useState(false);

  useEffect(() => {
    const fetchRecomendation = async () => {
      setCastMovieLoading(true);
      try {
        const response = await api.get(`/movie/${id}/credits`);
        setCastMovie(response.data.cast);
        setCastMovieLoading(false);
      } catch (error) {
        console.error(error);
        setCastMovieError(true);
      }
    };

    fetchRecomendation();
  }, [id]);

  return (
    <Carousel className="w-full">
      <CarouselContent className="flex justify-center">
        {CastMovie?.map((cast, index: React.Key) => (
          <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/6">
            <CardCast data={cast} loading={CastMovieLoading} error={CastMovieError} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CarouselCastMovie;
