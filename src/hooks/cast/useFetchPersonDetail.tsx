import { getPersonDetails } from "@/lib/apis/person";
import { useQuery } from "@tanstack/react-query";

interface IPersonDetails {
  id: number;
}

export function useFetchPersonDetail({ id }: IPersonDetails) {
  return useQuery({
    queryKey: ["person", id],
    queryFn: () => getPersonDetails({ id }),
    throwOnError: true,
  });
}
