"use client";

import SectionPagination from "@/components/section/container-section-pagination";
import { useFetchCategoryList } from "@/hooks/useFetchCategoryList";
import { TAll } from "@/types";
import React, { useEffect, useState } from "react";

const NowPlayingMovie = () => {
  const [nowPlayingMovies, setNowPlayingMovies] = useState<TAll[]>([]);
  const [onPage, setOnPage] = useState(1);

  const {
    data: nowPlayingMovie,
    isLoading: nowPlayingMovieIsLoading,
    error: nowPlayingMovieError,
  } = useFetchCategoryList({
    category: "movie",
    list: "now_playing",
    page: onPage,
  });

  useEffect(() => {
    if (nowPlayingMovie) {
      setNowPlayingMovies(nowPlayingMovie);
    }
  }, [nowPlayingMovie]);

  return (
    <SectionPagination
      title="Now Playing Movies"
      data={nowPlayingMovies}
      isLoading={nowPlayingMovieIsLoading}
      error={nowPlayingMovieError}
      onPage={onPage}
      setOnPage={setOnPage}
      category="movie"
    />
  );
};

export default NowPlayingMovie;
