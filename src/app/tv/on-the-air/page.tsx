"use client";

import SectionPagination from "@/components/section/container-section-pagination";
import { useFetchCategoryList } from "@/hooks/useFetchCategoryList";
import { TAll } from "@/types";
import React, { useEffect, useState } from "react";

const OnTheAirTV = () => {
  const [OnTheAirTV, setOnTheAirTV] = useState<TAll[]>([]);
  const [onPage, setOnPage] = useState(1);
  const {
    data: onTheAirTVData,
    isLoading: onTheAirTVDataIsLoading,
    error: onTheAirTVDataError,
  } = useFetchCategoryList({
    category: "tv",
    list: "on_the_air",
    page: onPage,
  });

  useEffect(() => {
    if (onTheAirTVData) {
      setOnTheAirTV(onTheAirTVData);
    }
  }, [onTheAirTVData]);

  return (
    <SectionPagination
      title="On The Air TV Shows"
      data={OnTheAirTV}
      isLoading={onTheAirTVDataIsLoading}
      error={onTheAirTVDataError}
      onPage={onPage}
      setOnPage={setOnPage}
      category="tv"
    />
  );
};

export default OnTheAirTV;
