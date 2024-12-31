"use client";

import PaginationMovie from "@/components/section/section-pagination-movie";
import { useFetchDiscoverMovie } from "@/hooks/movie/useFetchDiscoverMovie";
import { TMovie } from "@/types";
import React, { useEffect, useState } from "react";

const DiscoverMovie = () => {
  const [discoverMovies, setDiscoverMovies] = useState<TMovie[]>([]);
  const [onPage, setOnPage] = useState(1);

  const {
    data: discoverMovie,
    isLoading: discoverMovieIsLoading,
    error: discoverMovieError,
  } = useFetchDiscoverMovie({ pages: onPage });

  useEffect(() => {
    if (discoverMovie) {
      setDiscoverMovies(discoverMovie);
    }
  }, [discoverMovie]);

  return (
    <PaginationMovie
      title="Discover Movies"
      data={discoverMovies}
      IsLoading={discoverMovieIsLoading}
      IsError={discoverMovieError}
      onPage={onPage}
      setOnPage={setOnPage}
    />
  );
};

export default DiscoverMovie;
