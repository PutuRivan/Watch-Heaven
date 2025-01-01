import { TSearch } from "@/types";
import React from "react";
import CardSearch from "../cards/card-search";

interface Props {
  data: TSearch[];
  isLoading?: boolean;
  error?: Error | null;
}

const PaginationSearchCard = ({ data, isLoading, error }: Props) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-4">
        {data.map((search, index) => (
          <CardSearch
            key={index}
            data={search}
            loading={isLoading}
            error={error}
            category={search.media_type}
          />
        ))}
      </div>
    </>
  );
};

export default PaginationSearchCard;
