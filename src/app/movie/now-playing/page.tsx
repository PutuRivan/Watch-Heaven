"use client";

import PaginationMovie from "@/components/section/section-pagination-movie";
import { useFetchMovieList } from "@/hooks/movie/useFetchMovieList";
import { TMovie } from "@/types";
import React, { useEffect, useState } from "react";

const NowPlayingMovie = () => {
  const [nowPlayingMovies, setNowPlayingMovies] = useState<TMovie[]>([]);
  const [onPage, setOnPage] = useState(1);

  const {
    data: nowPlayingMovie,
    isLoading: nowPlayingMovieIsLoading,
    error: nowPlayingMovieError,
  } = useFetchMovieList({ category: "now_playing" });

  useEffect(() => {
    if (nowPlayingMovie) {
      setNowPlayingMovies(nowPlayingMovie);
    }
  }, [nowPlayingMovie]);

  return (
    <PaginationMovie
      title="Now Playing Movies"
      data={nowPlayingMovies}
      IsLoading={nowPlayingMovieIsLoading}
      IsError={nowPlayingMovieError}
      onPage={onPage}
      setOnPage={setOnPage}
    />
  );
};

export default NowPlayingMovie;
