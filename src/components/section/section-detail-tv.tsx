"use client";

import TableDetail from "@/components/table/table-detail";
import { Button } from "@/components/ui/button";
import { useFetchTVDetail } from "@/hooks/tv/useFetchTVDetail";
import { PlayCircleIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import ButtonBack from "../utils/button-back";
import { PiListHeart } from "react-icons/pi";
import CarouselCastTV from "../carousel/carousel-card-cast-tv";
import TVDetailRecomendation from "./section-detail-recomendation-tv";

interface Genre {
  id: number;
  name: string;
}

interface Props {
  id: string | string[];
}

const SectionTVDetail = ({ id }: Props) => {
  // Fetch TV details
  const {
    data: detailTV,
    isLoading: detailTVIsLoading,
    error: detailTVError,
  } = useFetchTVDetail({ id: Number(id) });

  // Loading state
  if (detailTVIsLoading) {
    return <h1>Loading...</h1>;
  }

  // Error state
  if (detailTVError) {
    return <h1>Error: {detailTVError.message}</h1>;
  }
  return (
    <>
      <ButtonBack />
      <main className="flex flex-col gap-10">
        <section className="m-10 flex flex-row gap-5">
          <figure className="w-1/2 object-cover transition-transform duration-300 hover:scale-105">
            <Image
              src={process.env.NEXT_PUBLIC_IMAGE_URL + detailTV?.poster_path}
              alt={detailTV?.title || "TV Poster"}
              width={400}
              height={200}
            />
          </figure>

          <div className="flex flex-col gap-2">
            <h1 className="text-2xl text-center font-bold">
              {detailTV?.name}
            </h1>
            <div className="flex flex-col items-center gap-5">
              {/* Genre */}
              <div className="flex flex-row justify-center gap-2">
                {detailTV?.genres?.map((genre: Genre, index: React.Key) => (
                  <div
                    key={index}
                    className="bg-neutral-500 p-2 rounded-lg text-white"
                  >
                    <h3>{genre.name}</h3>
                  </div>
                ))}
              </div>

              {/* Overview */}
              <div className="px-10 flex flex-col gap-5">
                <p className="text-justify">{detailTV.overview}</p>
                <TableDetail
                  popularity={detailTV.popularity}
                  runtime={detailTV.runtime}
                  vote_average={detailTV.vote_average}
                  vote_count={detailTV.vote_count}
                />
              </div>

              {/* Buttons */}
              <div className="flex flex-row gap-2">
                <Button variant={"destructive"}>
                  <PiListHeart />
                  Add Favorite
                </Button>
                <Button variant={"outline"}>
                  <PlayCircleIcon />
                  Add To Watch List
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h1 className="text-2xl text-center font-bold">Cast</h1>
          <CarouselCastTV id={~~id} />
        </section>

        <section>
          <h1 className="text-2xl px-5 font-bold">Recommendations</h1>
          <div className="">
            <TVDetailRecomendation id={~~id} />
          </div>
        </section>
      </main>
    </>
  );
};
export default SectionTVDetail;
