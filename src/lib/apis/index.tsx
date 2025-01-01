import { api } from "../axios";

interface ISearch {
  keywords: string;
  page: number;
}

export async function getSearch({ keywords, page }: ISearch) {
  try {
    const response = await api.get(
      `/search/multi?query=${keywords}&page=${page}`
    );
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}
