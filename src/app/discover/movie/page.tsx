"use client";

import SectionPagination from "@/components/section/container-section-pagination";
import { useFetchDiscover } from "@/hooks/useFetchDiscover";
import { TAll } from "@/types";
import React, { useEffect, useState } from "react";

const DiscoverMovie = () => {
  const [discoverMovies, setDiscoverMovies] = useState<TAll[]>([]);
  const [onPage, setOnPage] = useState(1);

  const {
    data: discoverMovie,
    isLoading: discoverMovieIsLoading,
    error: discoverMovieError,
  } = useFetchDiscover({ category: "movie", page: onPage });

  useEffect(() => {
    if (discoverMovie) {
      setDiscoverMovies(discoverMovie);
    }
  }, [discoverMovie]);

  return (
    <SectionPagination
      title="Discover Movies"
      data={discoverMovies}
      isLoading={discoverMovieIsLoading}
      error={discoverMovieError}
      onPage={onPage}
      setOnPage={setOnPage}
      category="movie"
    />
  );
};

export default DiscoverMovie;
