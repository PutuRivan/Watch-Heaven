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
import { TTvCast } from "@/types";

interface Props {
  id: number;
}

const CarouselCastTV = ({ id }: Props) => {
  const [CastTV, setCastTV] = useState<TTvCast[]>();
  const [CastTVLoading, setCastTVLoading] = useState(false);
  const [CastTVError, setCastTVError] = useState(false);

  useEffect(() => {
    const fetchRecomendation = async () => {
      setCastTVLoading(true);
      try {
        const response = await api.get(`/tv/${id}/credits`);
        setCastTV(response.data.cast);
        setCastTVLoading(false);
      } catch (error) {
        console.error(error);
        setCastTVError(true);
      }
    };

    fetchRecomendation();
  }, [id]);

  return (
    <Carousel className="w-full">
      <CarouselContent className="flex justify-center">
        {CastTV?.map((cast, index: React.Key) => (
          <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/6">
            <CardCast data={cast} loading={CastTVLoading} error={CastTVError} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CarouselCastTV;
