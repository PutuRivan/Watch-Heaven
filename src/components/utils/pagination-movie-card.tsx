import React from "react";
import CardMovie from "../cards/card-movie";
import { TMovie } from "@/types";

interface Props {
  data: TMovie[];
  isLoading?: boolean;
  error?: Error | null;
}

const PaginationCardMovie = ({ data, isLoading, error }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-4">
      {data.map((movie, index) => (
        <CardMovie key={index} data={movie} loading={isLoading} error={error} />
      ))}
    </div>
  );
};

export default PaginationCardMovie;
