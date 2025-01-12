export type TAll = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  media_type: string;
  gender: number;
  known_for_department: string;
  name: string;
  original_name: string;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
  first_air_date: string;
  origin_country: string[];
};

export type Tfavorite = {
  id: string;
  title: string;
  id_dbms: number;
  poster_path: string;
  media_type: string;
  userId: string;
  error?:string
};
