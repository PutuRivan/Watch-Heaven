"use client";

import { getMovieList } from "@/lib/apis/movie";
import { useQuery } from "@tanstack/react-query";

interface IQueryMovieList {
  category: string;
  page: number;
}

export const useFetchMovieList = ({ category, page }: IQueryMovieList) => {
  return useQuery({
    queryKey: ["movie", category, page],
    queryFn: () => getMovieList({ category, page }),
    throwOnError: true,
  });
};
