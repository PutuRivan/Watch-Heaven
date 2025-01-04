"use client";

import SectionPagination from "@/components/section/container-section-pagination";
import { useFetchCategoryList } from "@/hooks/useFetchCategoryList";
import { TAll } from "@/types";
import React, { useEffect, useState } from "react";

const AiringToday = () => {
  const [AiringToday, setAiringToday] = useState<TAll[]>([]);
  const [onPage, setOnPage] = useState(1);
  const {
    data: AiringTodayData,
    isLoading: AiringTodayDataIsLoading,
    error: AiringTodayDataError,
  } = useFetchCategoryList({
    category: "tv",
    list: "airing_today",
    page: onPage,
  });

  useEffect(() => {
    if (AiringTodayData) {
      setAiringToday(AiringTodayData);
    }
  }, [AiringTodayData]);

  return (
    <SectionPagination
      title="Airing Today TV Shows"
      data={AiringToday}
      isLoading={AiringTodayDataIsLoading}
      error={AiringTodayDataError}
      onPage={onPage}
      setOnPage={setOnPage}
      category="tv"
    />
  );
};

export default AiringToday;
