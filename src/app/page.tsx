"use client";

import HomeMovieCards from "@/components/section/section-card-movies";
import { useFetchDiscoverMovie } from "@/hooks/movie/useFetchDiscoverMovie";
import { useFetchMovieList } from "@/hooks/movie/useFetchMovieList";
import { TMovie } from "@/types";
import { useEffect, useState } from "react";

const Home = () => {
  const [discoverMovies, setDiscoverMovies] = useState<TMovie[]>([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState<TMovie[]>([]);
  const {
    data: discoverMoviesData,
    isLoading: discoverMoviesLoading,
    error: discoverMoviesError,
  } = useFetchDiscoverMovie({ pages: 1 });

  const {
    data: nowPlayingMovie,
    isLoading: nowPlayingMovieIsLoading,
    error: nowPlayingMovieError,
  } = useFetchMovieList({ category: "now_playing" });

  useEffect(() => {
    if (discoverMoviesData) {
      setDiscoverMovies(discoverMoviesData);
      setNowPlayingMovies(nowPlayingMovie);
    }
  }, [discoverMoviesData, nowPlayingMovie]);

  return (
    <main className="flex flex-col">
      <HomeMovieCards
        title="Discover Movies"
        linkHref="/discover/movie"
        linkTitle="See all"
        data={discoverMovies}
        loading={discoverMoviesLoading}
        error={discoverMoviesError}
      />
      <HomeMovieCards
        title="Now Playing Movies"
        linkHref="movie/now-playing#1"
        linkTitle="See all"
        data={nowPlayingMovies}
        loading={nowPlayingMovieIsLoading}
        error={nowPlayingMovieError}
      />
    </main>
  );
};

export default Home;
