import { api } from "../axios";

interface IPersonDetails {
  id: number;
}

export async function getPersonDetails({ id }: IPersonDetails) {
  try {
    const response = await api.get(`/person/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
