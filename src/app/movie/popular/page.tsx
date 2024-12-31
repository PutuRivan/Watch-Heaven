"use client";

import PaginationMovie from "@/components/section/section-pagination-movie";
import { useFetchMovieList } from "@/hooks/movie/useFetchMovieList";
import { TMovie } from "@/types";
import React, { useEffect, useState } from "react";

const PopularMovie = () => {
  const [PopularMovies, setPopularMovies] = useState<TMovie[]>([]);
  const [onPage, setOnPage] = useState(1);

  const {
    data: PopularMovie,
    isLoading: PopularMovieIsLoading,
    error: PopularMovieError,
  } = useFetchMovieList({ category: "popular", page: onPage });

  useEffect(() => {
    if (PopularMovie) {
      setPopularMovies(PopularMovie);
    }
  }, [PopularMovie]);

  return (
    <PaginationMovie
      title="Popular Movies"
      data={PopularMovies}
      IsLoading={PopularMovieIsLoading}
      IsError={PopularMovieError}
      onPage={onPage}
      setOnPage={setOnPage}
    />
  );
};

export default PopularMovie;
