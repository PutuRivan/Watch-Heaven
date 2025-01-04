"use client";

import SectionPagination from "@/components/section/container-section-pagination";
import { useFetchCategoryList } from "@/hooks/useFetchCategoryList";
import { TAll } from "@/types";
import React, { useEffect, useState } from "react";

const PopularTv = () => {
  const [PopularTv, setPopularTv] = useState<TAll[]>([]);
  const [onPage, setOnPage] = useState(1);
  const {
    data: PopularTvData,
    isLoading: PopularTvDataIsLoading,
    error: PopularTvDataError,
  } = useFetchCategoryList({ category: "tv", list: "popular", page: onPage });

  useEffect(() => {
    if (PopularTvData) {
      setPopularTv(PopularTvData);
    }
  }, [PopularTvData]);

  return (
    <SectionPagination
      title="Popular TV Shows"
      data={PopularTv}
      isLoading={PopularTvDataIsLoading}
      error={PopularTvDataError}
      onPage={onPage}
      setOnPage={setOnPage}
      category="tv"
    />
  );
};

export default PopularTv;
