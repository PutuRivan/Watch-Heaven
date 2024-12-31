import React from "react";
import { TTv } from "@/types";
import PaginationMovieHeader from "../utils/pagination-movie-header";
import PaginationMovieButton from "../utils/pagination-movie-button";
import PaginationCardTV from "../utils/pagination-tv-card";

interface Props {
  data: TTv[];
  IsLoading?: boolean;
  IsError?: Error | null;
  onPage: number;
  setOnPage: (page: number) => void;
  title: string;
}

const PaginationTV = ({
  data,
  IsLoading,
  IsError,
  onPage,
  setOnPage,
  title,
}: Props) => {
  return (
    <section>
      <PaginationMovieHeader title={title} />
      <PaginationCardTV data={data} isLoading={IsLoading} error={IsError} />
      <div className="my-5 ">
        <PaginationMovieButton currentPage={onPage} onPageChange={setOnPage} />
      </div>
    </section>
  );
};

export default PaginationTV;
