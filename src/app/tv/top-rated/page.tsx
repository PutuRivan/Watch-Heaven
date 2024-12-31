"use client";

import PaginationTV from "@/components/section/section-pagination-tv";
import { useFetchTVList } from "@/hooks/tv/useFetchTVList";
import { TTv } from "@/types";
import React, { useEffect, useState } from "react";

const TopRated = () => {
  const [TopRated, setTopRated] = useState<TTv[]>([]);
  const [onPage, setOnPage] = useState(1);
  const {
    data: TopRatedData,
    isLoading: TopRatedDataIsLoading,
    error: TopRatedDataError,
  } = useFetchTVList({ category: "top_rated", page: onPage });

  useEffect(() => {
    if (TopRatedData) {
      setTopRated(TopRatedData);
    }
  }, [TopRatedData]);

  return (
    <PaginationTV
      title="Top Rated TV Shows"
      data={TopRated}
      IsLoading={TopRatedDataIsLoading}
      IsError={TopRatedDataError}
      onPage={onPage}
      setOnPage={setOnPage}
    />
  );
};

export default TopRated;
