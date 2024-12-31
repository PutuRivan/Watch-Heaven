"use client";

import PaginationTV from "@/components/section/section-pagination-tv";
import { useFetchTVList } from "@/hooks/tv/useFetchTVList";
import { TTv } from "@/types";
import React, { useEffect, useState } from "react";

const PopularTv = () => {
  const [PopularTv, setPopularTv] = useState<TTv[]>([]);
  const [onPage, setOnPage] = useState(1);
  const {
    data: PopularTvData,
    isLoading: PopularTvDataIsLoading,
    error: PopularTvDataError,
  } = useFetchTVList({ category: "popular", page: onPage });

  useEffect(() => {
    if (PopularTvData) {
      setPopularTv(PopularTvData);
    }
  }, [PopularTvData]);

  return (
    <PaginationTV
      title="Popular TV Shows"
      data={PopularTv}
      IsLoading={PopularTvDataIsLoading}
      IsError={PopularTvDataError}
      onPage={onPage}
      setOnPage={setOnPage}
    />
  );
};

export default PopularTv;
