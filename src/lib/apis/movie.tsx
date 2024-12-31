import { api } from "../axios";

interface IDiscoverMovies {
  pages: number;
}

export async function getAllDiscoverMovies({ pages }: IDiscoverMovies) {
  try {
    const response = await api.get(
      `/discover/movie?page=${pages}&sort_by=popularity.desc`
    );
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}

interface IMovieDetails {
  id: number;
}

export async function getMovieDetails({ id }: IMovieDetails) {
  try {
    const response = await api.get(`/movie/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
export async function getMovieRecomendation({ id }: IMovieDetails) {
  try {
     const response = await api.get(`/movie/${id}/recommendations`);
    console.log(response.data.results)
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}
