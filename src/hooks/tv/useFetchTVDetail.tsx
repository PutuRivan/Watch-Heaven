"use client";

import { getTVDetails } from "@/lib/apis/tv";
import { useQuery } from "@tanstack/react-query";

interface IQueryDetail {
  id: number;
}

export const useFetchTVDetail = ({ id }: IQueryDetail) => {
  return useQuery({
    queryKey: ["tv", id],
    queryFn: () => getTVDetails({ id }),
    throwOnError: true,
  });
};
