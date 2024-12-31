import React from "react";
import { TMovie } from "@/types";
import PaginationMovieHeader from "../utils/pagination-movie-header";
import PaginationMovieButton from "../utils/pagination-movie-button";
import PaginationCardMovie from "../utils/pagination-movie-card";

interface Props {
  data: TMovie[];
  IsLoading?: boolean;
  IsError?: Error | null;
  onPage: number;
  setOnPage: (page: number) => void;
  title: string;
}

const PaginationMovie = ({
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
      <PaginationCardMovie
        data={data}
        isLoading={IsLoading}
        error={IsError}
      />
      <div className="my-5 ">
        <PaginationMovieButton currentPage={onPage} onPageChange={setOnPage} />
      </div>
    </section>
  );
};

export default PaginationMovie;
