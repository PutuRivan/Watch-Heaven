"use client";

import TableDetail from "@/components/table/table-detail";
import { Button } from "@/components/ui/button";
import { PlayCircleIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import ButtonBack from "../utils/button-back";
import { PiListHeart } from "react-icons/pi";
import { Badge } from "../ui/badge";
import { useFetchDetails } from "@/hooks/useFetchDetails";
import SectionDetailCast from "./container-section-detail-cast";
import SectionDetailRecomendation from "./container-section-detail-recomendation";

interface Genre {
  id: number;
  name: string;
}

interface Props {
  id: string | string[];
}

const SectionMovieDetail = ({ id }: Props) => {
  // Fetch movie details
  const {
    data: detailMovie,
    isLoading: detailMovieIsLoading,
    error: detailMovieError,
  } = useFetchDetails({ category: "movie", id: Number(id) });

  // Loading state
  if (detailMovieIsLoading) {
    return <h1>Loading...</h1>;
  }

  // Error state
  if (detailMovieError) {
    return <h1>Error: {detailMovieError.message}</h1>;
  }

  return (
    <>
      <ButtonBack />
      <main className="flex flex-col gap-10">
        <section className="m-10 flex flex-row gap-5">
          <figure className="w-1/3 object-cover transition-transform duration-300 hover:scale-105">
            <Image
              src={process.env.NEXT_PUBLIC_IMAGE_URL + detailMovie?.poster_path}
              alt={detailMovie?.title || "Sorry Image Not Found"}
              width={400}
              height={200}
            />
          </figure>

          <div className="flex flex-col gap-2">
            <h1 className="text-2xl text-center font-bold">
              {detailMovie?.title}
            </h1>
            <div className="flex flex-col items-center gap-5">
              {/* Genre */}
              <div className="flex flex-row justify-center gap-2">
                {detailMovie?.genres?.map((genre: Genre, index: React.Key) => (
                  <Badge key={index} variant={"secondary"}>
                    {genre.name}
                  </Badge>
                ))}
              </div>

              {/* Overview */}
              <div className="px-10 flex flex-col gap-5">
                <p className="text-justify">{detailMovie.overview}</p>
                <TableDetail
                  popularity={detailMovie.popularity}
                  runtime={detailMovie.runtime}
                  vote_average={detailMovie.vote_average}
                  vote_count={detailMovie.vote_count}
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

        <SectionDetailCast category="person" id={~~id} list="movie" />

        <SectionDetailRecomendation id={~~id} category="movie" />
      </main>
    </>
  );
};
export default SectionMovieDetail;
