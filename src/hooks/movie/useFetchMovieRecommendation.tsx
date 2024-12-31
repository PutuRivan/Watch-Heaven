"use client";

import { getMovieRecomendation } from "@/lib/apis/movie";
import { useQuery } from "@tanstack/react-query";

interface IQueryRecomendation {
  id: number;
}

export const useFetchMovieRecomendation = ({ id }: IQueryRecomendation) => {
  return useQuery({
    queryKey: ["movie", id],
    queryFn: () => getMovieRecomendation({ id }),
    throwOnError: true,
  });
};
