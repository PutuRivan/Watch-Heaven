"use client";

import { getAllDiscoverMovies } from "@/lib/apis/movie";
import { useQuery } from "@tanstack/react-query";

interface IQueryDiscover {
  pages: number;
}

export const useFetchDiscoverMovie = ({ pages }: IQueryDiscover) => {
  return useQuery({
    queryKey: ["movie", pages],
    queryFn: () => getAllDiscoverMovies({ pages }),
    throwOnError: true,
  });
};
