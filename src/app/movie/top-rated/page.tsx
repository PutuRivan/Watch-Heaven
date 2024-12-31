"use client";

import PaginationMovie from "@/components/section/section-pagination-movie";
import { useFetchMovieList } from "@/hooks/movie/useFetchMovieList";
import { TMovie } from "@/types";
import React, { useEffect, useState } from "react";

const TopRatedMovie = () => {
  const [TopRatedMovies, setTopRatedMovies] = useState<TMovie[]>([]);
  const [onPage, setOnPage] = useState(1);

  const {
    data: TopRatedMovie,
    isLoading: TopRatedMovieIsLoading,
    error: TopRatedMovieError,
  } = useFetchMovieList({ category: "top_rated", page: onPage });

  useEffect(() => {
    if (TopRatedMovie) {
      setTopRatedMovies(TopRatedMovie);
    }
  }, [TopRatedMovie]);

  return (
    <PaginationMovie
      title="Top Rated Movies"
      data={TopRatedMovies}
      IsLoading={TopRatedMovieIsLoading}
      IsError={TopRatedMovieError}
      onPage={onPage}
      setOnPage={setOnPage}
    />
  );
};

export default TopRatedMovie;
