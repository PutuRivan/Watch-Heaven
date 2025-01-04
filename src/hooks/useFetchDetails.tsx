import { getDataDetails } from "@/lib/apis"
import { useQuery } from "@tanstack/react-query"

interface IGetDetails {
    id: number
    category: string
}

export function useFetchDetails({ id, category }: IGetDetails) {
    return useQuery({
        queryKey: [category, id],
        queryFn: () => getDataDetails({ id, category }),
        throwOnError: true,
    })
}