import React from "react";
import { TTv } from "@/types";
import CardTV from "../cards/card-tv";

interface Props {
  data: TTv[];
  isLoading?: boolean;
  error?: Error | null;
}

const PaginationCardTV = ({ data, isLoading, error }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-4">
      {data.map((tv, index) => (
        <CardTV key={index} data={tv} loading={isLoading} error={error} />
      ))}
    </div>
  );
};

export default PaginationCardTV;
