import { getDiscover } from "@/lib/apis";
import { useQuery } from "@tanstack/react-query";

interface IQueryDiscover {
  page: number;
  category: string;
}

export function useFetchDiscover({ page, category }: IQueryDiscover) {
  return useQuery({
    queryKey: [category, page],
    queryFn: () => getDiscover({ page, category }),
  });
}
