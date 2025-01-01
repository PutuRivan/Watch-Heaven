import { TSearch } from "@/types";
import React from "react";
import PaginationMovieHeader from "../utils/pagination-movie-header";
import PaginationSearchCard from "../utils/pagination-search-card";
import PaginationMovieButton from "../utils/pagination-movie-button";

interface Props {
  data: TSearch[];
  title: string;
  onPage: number;
  isLoading?: boolean;
  error?: Error | null;
  setOnPage: (page: number) => void;
}

const PaginationSearch = ({
  title,
  data,
  onPage,
  setOnPage,
  isLoading,
  error,
}: Props) => {
  return (
    <>
      <PaginationMovieHeader title={title} />
      <PaginationSearchCard data={data} isLoading={isLoading} error={error} />
      <PaginationMovieButton currentPage={onPage} onPageChange={setOnPage} />
    </>
  );
};

export default PaginationSearch;
