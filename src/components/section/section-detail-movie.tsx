"use client";

import TableDetail from "@/components/table/table-detail";
import { Button } from "@/components/ui/button";
import { useFetchMovieDetail } from "@/hooks/movie/useFetchMovieDetail";
import { PlayCircleIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import CarouselCastMovie from "../carousel/carousel-card-cast";
import ButtonBack from "../utils/button-back";
import { PiListHeart } from "react-icons/pi";
import MovieDetailRecomendation from "./section-detail-recomendation-movie";

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
  } = useFetchMovieDetail({ id: Number(id) });

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

        <section>
          <h1 className="text-2xl text-center font-bold">Cast</h1>
          <CarouselCastMovie id={~~id} />
        </section>

        <section>
          <h1 className="text-2xl px-5 font-bold">Recommendations</h1>
          <div className="">
            <MovieDetailRecomendation id={~~id} />
          </div>
        </section>
      </main>
    </>
  );
};
export default SectionMovieDetail;
