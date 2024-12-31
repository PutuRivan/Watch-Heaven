import React, { useEffect, useState } from "react";
import CardMovie from "../cards/card-movie";
// import { useFetchMovieRecomendation } from "@/hooks/movie/useFetchMovieRecommendation";
import { TMovieRecommendation } from "@/types";
import { api } from "@/lib/axios";

interface Props {
  id: number;
}

const DetailRecomendation = ({ id }: Props) => {
  const [recomendationMovie, setRecomendationMovie] =
    useState<TMovieRecommendation[]>();
  const [recomendationIsLoading, setRecomendationIsLoading] = useState(false);
  const [recomendationError, setRecomendationError] = useState(false);

  useEffect(() => {
    const fetchRecomendation = async () => {
      setRecomendationIsLoading(true);
      try {
        const response = await api.get(`/movie/${id}/recommendations`);
        setRecomendationMovie(response.data.results);
        setRecomendationIsLoading(false);
      } catch (error) {
        console.error(error);
        setRecomendationError(true);
      }
    };

    fetchRecomendation();
  }, [id]);

  return (
    <div className="grid grid-cols-4 gap-4">
      {recomendationMovie?.map((data, index) => (
        <CardMovie
          data={data}
          loading={recomendationIsLoading}
          error={recomendationError}
          key={index}
        />
      ))}
    </div>
  );
};

export default DetailRecomendation;
