"use client";

import SectionPagination from "@/components/section/container-section-pagination";
import { useFetchCategoryList } from "@/hooks/useFetchCategoryList";
import { TAll } from "@/types";
import React, { useEffect, useState } from "react";

const TopRatedMovie = () => {
  const [TopRatedMovies, setTopRatedMovies] = useState<TAll[]>([]);
  const [onPage, setOnPage] = useState(1);

  const {
    data: TopRatedMovie,
    isLoading: TopRatedMovieIsLoading,
    error: TopRatedMovieError,
  } = useFetchCategoryList({
    category: "movie",
    list: "top_rated",
    page: onPage,
  });

  useEffect(() => {
    if (TopRatedMovie) {
      setTopRatedMovies(TopRatedMovie);
    }
  }, [TopRatedMovie]);

  return (
    <SectionPagination
      title="Top Rated Movies"
      data={TopRatedMovies}
      isLoading={TopRatedMovieIsLoading}
      error={TopRatedMovieError}
      onPage={onPage}
      setOnPage={setOnPage}
      category="movie"
    />
  );
};

export default TopRatedMovie;
