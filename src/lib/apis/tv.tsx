import { api } from "../axios";

interface IDiscoverTV {
  pages: number;
}

export async function getAllDiscoverTV({ pages }: IDiscoverTV) {
  try {
    const response = await api.get(
      `/discover/tv?page=${pages}&sort_by=popularity.desc`
    );
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}

interface ITVDetails {
  id: number;
}

export async function getTVDetails({ id }: ITVDetails) {
  try {
    const response = await api.get(`/tv/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

interface ITVList {
  category: string;
  page: number;
}

export async function getTVList({ category, page }: ITVList) {
  try {
    const response = await api.get(`/tv/${category}?page=${page}`);
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}
