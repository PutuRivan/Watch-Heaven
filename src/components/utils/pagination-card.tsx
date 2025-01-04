import { TAll } from "@/types";
import React from "react";
import Cards from "./cards";

interface Props {
  datas: TAll[];
  isLoading?: boolean;
  error?: Error | null;
  category?: string;
}

const PaginationCard = ({ datas, isLoading, error, category }: Props) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-4">
        {datas.map((data, index) => (
          <Cards
            key={index}
            data={data}
            loading={isLoading}
            error={error}
            category={category ? category : data.media_type}
          />
        ))}
      </div>
    </>
  );
};

export default PaginationCard;
