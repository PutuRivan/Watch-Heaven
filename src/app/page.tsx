"use client";

import SectionCarousel from "@/components/section/container-section-home-carousel";
import { useFetchCategoryList } from "@/hooks/useFetchCategoryList";
import { useFetchDiscover } from "@/hooks/useFetchDiscover";
import { TAll } from "@/types";
import { useEffect, useState } from "react";

const Home = () => {
  const [discoverMovies, setDiscoverMovies] = useState<TAll[]>([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState<TAll[]>([]);
  const [PopularMovies, setPopularMovies] = useState<TAll[]>([]);
  const [TopRatedMovies, setTopRatedMovies] = useState<TAll[]>([]);
  const [UpComingMovies, setUpComingMovies] = useState<TAll[]>([]);
  const [discoverTv, setDiscoverTv] = useState<TAll[]>([]);
  const [AiringToday, setAiringToday] = useState<TAll[]>([]);
  const [OnTheAirTV, setOnTheAirTV] = useState<TAll[]>([]);
  const [PopularTv, setPopularTv] = useState<TAll[]>([]);
  const [TopRated, setTopRated] = useState<TAll[]>([]);

  const {
    data: discoverMoviesData,
    isLoading: discoverMoviesLoading,
    error: discoverMoviesError,
  } = useFetchDiscover({ page: 1, category: "movie" });

  const {
    data: discoverTvData,
    isLoading: discoverTvLoading,
    error: discoverTvError,
  } = useFetchDiscover({ page: 1, category: "tv" });

  const {
    data: nowPlayingMovie,
    isLoading: nowPlayingMovieIsLoading,
    error: nowPlayingMovieError,
  } = useFetchCategoryList({ category: "movie", list: "now_playing", page: 1 });

  const {
    data: PopularMovie,
    isLoading: PopularMovieIsLoading,
    error: PopularMovieError,
  } = useFetchCategoryList({ category: "movie", list: "popular", page: 1 });

  const {
    data: TopRatedMovie,
    isLoading: TopRatedMovieIsLoading,
    error: TopRatedMovieError,
  } = useFetchCategoryList({ category: "movie", list: "top_rated", page: 1 });

  const {
    data: UpComingMovie,
    isLoading: UpComingMovieIsLoading,
    error: UpComingMovieError,
  } = useFetchCategoryList({ category: "movie", list: "upcoming", page: 1 });

  const {
    data: AiringTodayData,
    isLoading: AiringTodayDataIsLoading,
    error: AiringTodayDataError,
  } = useFetchCategoryList({ category: "tv", list: "airing_today", page: 1 });

  const {
    data: onTheAirTVData,
    isLoading: onTheAirTVDataIsLoading,
    error: onTheAirTVDataError,
  } = useFetchCategoryList({ category: "tv", list: "on_the_air", page: 1 });

  const {
    data: PopularTvData,
    isLoading: PopularTvDataIsLoading,
    error: PopularTvDataError,
  } = useFetchCategoryList({ category: "tv", list: "popular", page: 1 });

  const {
    data: TopRatedData,
    isLoading: TopRatedDataIsLoading,
    error: TopRatedDataError,
  } = useFetchCategoryList({ category: "tv", list: "top_rated", page: 1 });

  useEffect(() => {
    if (
      discoverMoviesData ||
      nowPlayingMovie ||
      PopularMovie ||
      TopRatedMovie ||
      UpComingMovie ||
      discoverTvData ||
      AiringTodayData ||
      onTheAirTVData ||
      PopularTvData ||
      TopRatedData
    ) {
      setDiscoverMovies(discoverMoviesData);
      setNowPlayingMovies(nowPlayingMovie);
      setPopularMovies(PopularMovie);
      setTopRatedMovies(TopRatedMovie);
      setUpComingMovies(UpComingMovie);
      setDiscoverTv(discoverTvData);
      setAiringToday(AiringTodayData);
      setOnTheAirTV(onTheAirTVData);
      setPopularTv(PopularTvData);
      setTopRated(TopRatedData);
    }
  }, [
    discoverMoviesData,
    nowPlayingMovie,
    PopularMovie,
    TopRatedMovie,
    UpComingMovie,
    discoverTvData,
    AiringTodayData,
    onTheAirTVData,
    PopularTvData,
    TopRatedData,
  ]);

  return (
    <main className="flex flex-col">
      <SectionCarousel
        title="Up Coming Movies"
        linkTitle="See all"
        data={UpComingMovies}
        loading={UpComingMovieIsLoading}
        error={UpComingMovieError}
        linkHref="movie/up-coming#1"
        category="movie"
      />
      <SectionCarousel
        title="Now Playing Movies"
        linkTitle="See all"
        data={nowPlayingMovies}
        loading={nowPlayingMovieIsLoading}
        error={nowPlayingMovieError}
        linkHref="movie/now-playing#1"
        category="movie"
      />
      <SectionCarousel
        title="Popular Movies"
        linkTitle="See all"
        data={PopularMovies}
        loading={PopularMovieIsLoading}
        error={PopularMovieError}
        linkHref="movie/popular#1"
        category="movie"
      />
      <SectionCarousel
        title="Top Rated Movies"
        linkTitle="See all"
        data={TopRatedMovies}
        loading={TopRatedMovieIsLoading}
        error={TopRatedMovieError}
        linkHref="movie/top-rated#1"
        category="movie"
      />
      <SectionCarousel
        title="Discover Movies"
        linkTitle="See all"
        data={discoverMovies}
        loading={discoverMoviesLoading}
        error={discoverMoviesError}
        linkHref="/discover/movie#1"
        category="movie"
      />
      <SectionCarousel
        title="Airing Today TV Shows"
        linkTitle="See all"
        data={AiringToday}
        loading={AiringTodayDataIsLoading}
        error={AiringTodayDataError}
        linkHref="/tv/airing-today#1"
        category="tv"
      />
      <SectionCarousel
        title="On The Air TV Shows"
        linkTitle="See all"
        data={OnTheAirTV}
        loading={onTheAirTVDataIsLoading}
        error={onTheAirTVDataError}
        linkHref="/tv/on-the-air#1"
        category="tv"
      />
      <SectionCarousel
        title="Popular TV Shows"
        linkTitle="See all"
        data={PopularTv}
        loading={PopularTvDataIsLoading}
        error={PopularTvDataError}
        linkHref="/tv/popular#1"
        category="tv"
      />
      <SectionCarousel
        title="Top Rated TV Shows"
        linkTitle="See all"
        data={TopRated}
        loading={TopRatedDataIsLoading}
        error={TopRatedDataError}
        linkHref="/tv/top-rated#1"
        category="tv"
      />
      <SectionCarousel
        title="Discover TV"
        linkTitle="See all"
        data={discoverTv}
        loading={discoverTvLoading}
        error={discoverTvError}
        linkHref="/discover/tv#1"
        category="tv"
      />
    </main>
  );
};

export default Home;
