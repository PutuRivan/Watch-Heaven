"use client";

import { getTVList } from "@/lib/apis/tv";
import { useQuery } from "@tanstack/react-query";

interface IQueryTVList {
  category: string;
  page: number;
}

export const useFetchTVList = ({ category, page }: IQueryTVList) => {
  return useQuery({
    queryKey: ["tv", category, page],
    queryFn: () => getTVList({ category, page }),
    throwOnError: true,
  });
};
