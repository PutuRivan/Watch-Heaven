import { getSearch } from "@/lib/apis";
import { useQuery } from "@tanstack/react-query";

interface IQuerySearch {
  keywords: string;
  page: number;
}

export function useFetchSearch({ keywords, page }: IQuerySearch) {
  return useQuery({
    queryKey: [keywords, page],
    queryFn: () => getSearch({ keywords, page }),
    throwOnError: true,
  });
}
