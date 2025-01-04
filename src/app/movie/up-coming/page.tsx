"use client";

import SectionPagination from "@/components/section/container-section-pagination";
import { useFetchCategoryList } from "@/hooks/useFetchCategoryList";
import { TAll } from "@/types";
import React, { useEffect, useState } from "react";

const UpComingMovie = () => {
  const [UpComingMovies, setUpComingMovies] = useState<TAll[]>([]);
  const [onPage, setOnPage] = useState(1);

  const {
    data: UpComingMovie,
    isLoading: UpComingMovieIsLoading,
    error: UpComingMovieError,
  } = useFetchCategoryList({
    category: "movie",
    list: "upcoming",
    page: onPage,
  });

  useEffect(() => {
    if (UpComingMovie) {
      setUpComingMovies(UpComingMovie);
    }
  }, [UpComingMovie]);

  return (
    <SectionPagination
      title="Up Coming Movies"
      data={UpComingMovies}
      isLoading={UpComingMovieIsLoading}
      error={UpComingMovieError}
      onPage={onPage}
      setOnPage={setOnPage}
      category="movie"
    />
  );
};

export default UpComingMovie;
