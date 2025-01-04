import React from "react";
import { TAll } from "@/types";
import PaginationCard from "../utils/pagination-card";
import PaginationButton from "../utils/pagination-button";
import PaginationHeader from "../utils/pagination-header";

interface Props {
  data: TAll[];
  title: string;
  onPage: number;
  isLoading?: boolean;
  error?: Error | null;
  setOnPage: (page: number) => void;
  category?: string;
}

const SectionPagination = ({
  title,
  data,
  onPage,
  setOnPage,
  isLoading,
  error,
  category,
}: Props) => {
  return (
    <>
      <PaginationHeader title={title} />
      <PaginationCard datas={data} isLoading={isLoading} error={error} category={category} />
      <PaginationButton currentPage={onPage} onPageChange={setOnPage} />
    </>
  );
};

export default SectionPagination;
