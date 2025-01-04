import { getDataCategory } from "@/lib/apis";
import { useQuery } from "@tanstack/react-query";

interface IDataCategory {
  page: number;
  category: string;
  list: string;
}

export function useFetchCategoryList({ category, list, page }: IDataCategory) {
  return useQuery({
    queryKey: [category, list, page],
    queryFn: () => getDataCategory({ page, category, list }),
    throwOnError: true,
  });
}
