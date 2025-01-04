"use client";

import SectionPagination from "@/components/section/container-section-pagination";
import { useFetchCategoryList } from "@/hooks/useFetchCategoryList";
import { TAll } from "@/types";
import React, { useEffect, useState } from "react";

const TopRated = () => {
  const [TopRated, setTopRated] = useState<TAll[]>([]);
  const [onPage, setOnPage] = useState(1);
  const {
    data: TopRatedData,
    isLoading: TopRatedDataIsLoading,
    error: TopRatedDataError,
  } = useFetchCategoryList({ category: "tv", list: "top_rated", page: onPage });

  useEffect(() => {
    if (TopRatedData) {
      setTopRated(TopRatedData);
    }
  }, [TopRatedData]);

  return (
    <SectionPagination
      title="Top Rated TV Shows"
      data={TopRated}
      isLoading={TopRatedDataIsLoading}
      error={TopRatedDataError}
      onPage={onPage}
      setOnPage={setOnPage}
    />
  );
};

export default TopRated;
