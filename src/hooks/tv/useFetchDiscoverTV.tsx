"use client";

import { getAllDiscoverTV } from "@/lib/apis/tv";
import { useQuery } from "@tanstack/react-query";

interface IQueryDiscover {
  pages: number;
}

export const useFetchDiscoverTV = ({ pages }: IQueryDiscover) => {
  return useQuery({
    queryKey: ["tv", pages],
    queryFn: () => getAllDiscoverTV({ pages }),
    throwOnError: true,
  });
};
