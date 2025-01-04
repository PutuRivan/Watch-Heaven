import { api } from "@/lib/axios";
import { TAll } from "@/types";
import React, { useEffect, useState } from "react";
import Cards from "../utils/cards";

interface Props {
  id: number;
  category: string;
}

const SectionRecomendation = ({ id, category }: Props) => {
  const [recomendation, setRecomendation] = useState<TAll[]>();
  const [recomendationIsLoading, setRecomendationIsLoading] = useState(false);
  const [recomendationError, setRecomendationError] = useState(false);

  useEffect(() => {
    const fetchRecomendation = async () => {
      setRecomendationIsLoading(true);
      try {
        const response = await api.get(`/${category}/${id}/recommendations`);
        setRecomendation(response.data.results);
        setRecomendationIsLoading(false);
      } catch (error) {
        console.error(error);
        setRecomendationError(true);
      }
    };

    fetchRecomendation();
  }, [id, category]);
  
  return (
    <div className="grid grid-cols-4 gap-4">
      {recomendation?.map((data, index) => (
        <Cards
          data={data}
          loading={recomendationIsLoading}
          error={recomendationError}
          key={index}
          category="movie"
        />
      ))}
    </div>
  );
};

export default SectionRecomendation;
