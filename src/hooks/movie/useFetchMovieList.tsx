"use client";

import { getMovieList } from "@/lib/apis/movie";
import { useQuery } from "@tanstack/react-query";

interface IQueryMovieList {
  category: string;
}

export const useFetchMovieList = ({ category }: IQueryMovieList) => {
  return useQuery({
    queryKey: ["movie", category],
    queryFn: () => getMovieList({ category }),
    throwOnError: true,
  });
};
