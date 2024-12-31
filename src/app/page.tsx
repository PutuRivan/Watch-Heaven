"use client";

import HomeMovieCards from "@/components/section/section-card-movies";
import { useFetchDiscoverMovie } from "@/hooks/movie/useFetchDiscoverMovie";
import { useFetchMovieList } from "@/hooks/movie/useFetchMovieList";
import { TMovie } from "@/types";
import { useEffect, useState } from "react";

const Home = () => {
  const [discoverMovies, setDiscoverMovies] = useState<TMovie[]>([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState<TMovie[]>([]);
  const [PopularMovies, setPopularMovies] = useState<TMovie[]>([]);
  const [TopRatedMovies, setTopRatedMovies] = useState<TMovie[]>([]);

  const {
    data: discoverMoviesData,
    isLoading: discoverMoviesLoading,
    error: discoverMoviesError,
  } = useFetchDiscoverMovie({ pages: 1 });

  const {
    data: nowPlayingMovie,
    isLoading: nowPlayingMovieIsLoading,
    error: nowPlayingMovieError,
  } = useFetchMovieList({ category: "now_playing", page: 1 });

  const {
    data: PopularMovie,
    isLoading: PopularMovieIsLoading,
    error: PopularMovieError,
  } = useFetchMovieList({ category: "popular", page: 1 });

  const {
    data: TopRatedMovie,
    isLoading: TopRatedMovieIsLoading,
    error: TopRatedMovieError,
  } = useFetchMovieList({ category: "top_rated", page: 1 });

  useEffect(() => {
    if (
      discoverMoviesData ||
      nowPlayingMovie ||
      PopularMovie ||
      TopRatedMovie
    ) {
      setDiscoverMovies(discoverMoviesData);
      setNowPlayingMovies(nowPlayingMovie);
      setPopularMovies(PopularMovie);
      setTopRatedMovies(TopRatedMovie);
    }
  }, [discoverMoviesData, nowPlayingMovie, PopularMovie, TopRatedMovie]);

  return (
    <main className="flex flex-col">
      <HomeMovieCards
        title="Discover Movies"
        linkTitle="See all"
        data={discoverMovies}
        loading={discoverMoviesLoading}
        error={discoverMoviesError}
        linkHref="/discover/movie#1"
      />
      <HomeMovieCards
        title="Now Playing Movies"
        linkTitle="See all"
        data={nowPlayingMovies}
        loading={nowPlayingMovieIsLoading}
        error={nowPlayingMovieError}
        linkHref="movie/now-playing#1"
      />
      <HomeMovieCards
        title="Top Rated Movies"
        linkTitle="See all"
        data={TopRatedMovies}
        loading={TopRatedMovieIsLoading}
        error={TopRatedMovieError}
        linkHref="movie/top-rated#1"
      />
      <HomeMovieCards
        title="Popular Movies"
        linkTitle="See all"
        data={PopularMovies}
        loading={PopularMovieIsLoading}
        error={PopularMovieError}
        linkHref="movie/popular#1"
      />
    </main>
  );
};

export default Home;
