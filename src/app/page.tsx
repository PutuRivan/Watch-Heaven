"use client";

import HomeMovieCards from "@/components/section/section-card-movies";
import { useFetchDiscoverMovie } from "@/hooks/movie/useFetchDiscoverMovie";
import { TMovie } from "@/types";
import { useEffect, useState } from "react";

const Home = () => {
  const [discoverMovies, setDiscoverMovies] = useState<TMovie[]>([]);

  const {
    data: discoverMoviesData,
    isLoading: discoverMoviesLoading,
    error: discoverMoviesError,
  } = useFetchDiscoverMovie({ pages: 1 });

  useEffect(() => {
    if (discoverMoviesData) {
      setDiscoverMovies(discoverMoviesData);
    }
  }, [discoverMoviesData]);
  
  return (
    <main className="flex flex-col">
      <HomeMovieCards
        title="Trending Movies"
        linkHref="/discover/movie"
        linkTitle="See all"
        data={discoverMovies}
        loading={discoverMoviesLoading}
        error={discoverMoviesError}
      />
    </main>
  );
};

export default Home;
