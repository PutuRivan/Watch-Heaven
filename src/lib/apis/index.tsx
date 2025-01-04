import { api } from "../axios";

interface IQueryDiscover {
  page: number;
  category: string;
}

export async function getDiscover({ page, category }: IQueryDiscover) {
  try {
    const response = await api.get(
      `/discover/${category}?page=${page}&sort_by=popularity.desc`
    );
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}

interface IDataCategory {
  page: number;
  category: string;
  list: string;
}

export async function getDataCategory({ page, category, list }: IDataCategory) {
  try {
    const response = await api.get(
      `/${category}/${list}?page=${page}&sort_by=popularity.desc`
    );
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}

interface IGetDetails {
  id: number;
  category: string;
}

export async function getDataDetails({ id, category }: IGetDetails) {
  try {
    const response = await api.get(`/${category}/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

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
