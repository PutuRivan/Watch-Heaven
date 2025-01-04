"use client";

import SectionPagination from "@/components/section/container-section-pagination";
import { useFetchCategoryList } from "@/hooks/useFetchCategoryList";
import { TAll } from "@/types";
import React, { useEffect, useState } from "react";

const PopularMovie = () => {
  const [PopularMovies, setPopularMovies] = useState<TAll[]>([]);
  const [onPage, setOnPage] = useState(1);

  const {
    data: PopularMovie,
    isLoading: PopularMovieIsLoading,
    error: PopularMovieError,
  } = useFetchCategoryList({
    category: "movie",
    list: "popular",
    page: onPage,
  });

  useEffect(() => {
    if (PopularMovie) {
      setPopularMovies(PopularMovie);
    }
  }, [PopularMovie]);

  return (
    <SectionPagination
      title="Popular Movies"
      data={PopularMovies}
      isLoading={PopularMovieIsLoading}
      error={PopularMovieError}
      onPage={onPage}
      setOnPage={setOnPage}
      category="movie"
    />
  );
};

export default PopularMovie;
