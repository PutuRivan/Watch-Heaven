import React, { useEffect, useState } from "react";
import { TTvRecomendation } from "@/types";
import { api } from "@/lib/axios";
import CardTV from "../cards/card-tv";

interface Props {
  id: number;
}

const TVDetailRecomendation = ({ id }: Props) => {
  const [recomendationTV, setrecomendationTV] = useState<TTvRecomendation[]>();
  const [recomendationIsLoading, setRecomendationIsLoading] = useState(false);
  const [recomendationError, setRecomendationError] = useState(false);

  useEffect(() => {
    const fetchRecomendation = async () => {
      setRecomendationIsLoading(true);
      try {
        const response = await api.get(`/tv/${id}/recommendations`);
        setrecomendationTV(response.data.results);
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
      {recomendationTV?.map((data, index) => (
        <CardTV
          data={data}
          loading={recomendationIsLoading}
          error={recomendationError}
          key={index}
        />
      ))}
    </div>
  );
};

export default TVDetailRecomendation;
