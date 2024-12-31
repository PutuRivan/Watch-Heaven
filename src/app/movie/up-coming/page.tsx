"use client";

import PaginationMovie from "@/components/section/section-pagination-movie";
import { useFetchMovieList } from "@/hooks/movie/useFetchMovieList";
import { TMovie } from "@/types";
import React, { useEffect, useState } from "react";

const UpComingMovie = () => {
  const [UpComingMovies, setUpComingMovies] = useState<TMovie[]>([]);
  const [onPage, setOnPage] = useState(1);

  const {
    data: UpComingMovie,
    isLoading: UpComingMovieIsLoading,
    error: UpComingMovieError,
  } = useFetchMovieList({ category: "upcoming", page: onPage });

  useEffect(() => {
    if (UpComingMovie) {
      setUpComingMovies(UpComingMovie);
    }
  }, [UpComingMovie]);

  return (
    <PaginationMovie
      title="Up Coming Movies"
      data={UpComingMovies}
      IsLoading={UpComingMovieIsLoading}
      IsError={UpComingMovieError}
      onPage={onPage}
      setOnPage={setOnPage}
    />
  );
};

export default UpComingMovie;
