"use client";

import HomeMovieCards from "@/components/section/section-card-movies";
import HomeMovieTVs from "@/components/section/section-card-tv";
import { useFetchDiscoverMovie } from "@/hooks/movie/useFetchDiscoverMovie";
import { useFetchMovieList } from "@/hooks/movie/useFetchMovieList";
import { useFetchDiscoverTV } from "@/hooks/tv/useFetchDiscoverTV";
import { TMovie, TTv } from "@/types";
import { useEffect, useState } from "react";

const Home = () => {
  const [discoverMovies, setDiscoverMovies] = useState<TMovie[]>([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState<TMovie[]>([]);
  const [PopularMovies, setPopularMovies] = useState<TMovie[]>([]);
  const [TopRatedMovies, setTopRatedMovies] = useState<TMovie[]>([]);
  const [UpComingMovies, setUpComingMovies] = useState<TMovie[]>([]);
  const [discoverTv, setDiscoverTv] = useState<TTv[]>([]);

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

  const {
    data: UpComingMovie,
    isLoading: UpComingMovieIsLoading,
    error: UpComingMovieError,
  } = useFetchMovieList({ category: "upcoming", page: 1 });

  const {
    data: discoverTvData,
    isLoading: discoverTvLoading,
    error: discoverTvError,
  } = useFetchDiscoverTV({ pages: 1 });

  useEffect(() => {
    if (
      discoverMoviesData ||
      nowPlayingMovie ||
      PopularMovie ||
      TopRatedMovie ||
      UpComingMovie ||
      discoverTvData
    ) {
      setDiscoverMovies(discoverMoviesData);
      setNowPlayingMovies(nowPlayingMovie);
      setPopularMovies(PopularMovie);
      setTopRatedMovies(TopRatedMovie);
      setUpComingMovies(UpComingMovie);
      setDiscoverTv(discoverTvData);
    }
  }, [
    discoverMoviesData,
    nowPlayingMovie,
    PopularMovie,
    TopRatedMovie,
    UpComingMovie,
    discoverTvData,
  ]);

  return (
    <main className="flex flex-col">
      <HomeMovieCards
        title="Up Coming Movies"
        linkTitle="See all"
        data={UpComingMovies}
        loading={UpComingMovieIsLoading}
        error={UpComingMovieError}
        linkHref="movie/up-coming#1"
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
        title="Popular Movies"
        linkTitle="See all"
        data={PopularMovies}
        loading={PopularMovieIsLoading}
        error={PopularMovieError}
        linkHref="movie/popular#1"
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
        title="Discover Movies"
        linkTitle="See all"
        data={discoverMovies}
        loading={discoverMoviesLoading}
        error={discoverMoviesError}
        linkHref="/discover/movie#1"
      />
      <HomeMovieTVs
        title="Discover TV"
        linkTitle="See all"
        data={discoverTv}
        loading={discoverTvLoading}
        error={discoverTvError}
        linkHref="/discover/tv#1"
      />
    </main>
  );
};

export default Home;
