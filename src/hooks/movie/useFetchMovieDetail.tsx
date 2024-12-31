"use client";

import { getMovieDetails } from "@/lib/apis/movie";
import { useQuery } from "@tanstack/react-query";

interface IQueryDetail {
  id: number;
}

export const useFetchMovieDetail = ({ id }: IQueryDetail) => {
  return useQuery({
    queryKey: ["movie", id],
    queryFn: () => getMovieDetails({ id }),
    throwOnError: true,
  });
};
