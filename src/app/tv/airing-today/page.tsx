"use client";

import PaginationTV from "@/components/section/section-pagination-tv";
import { useFetchTVList } from "@/hooks/tv/useFetchTVList";
import { TTv } from "@/types";
import React, { useEffect, useState } from "react";

const AiringToday = () => {
  const [AiringToday, setAiringToday] = useState<TTv[]>([]);
  const [onPage, setOnPage] = useState(1);
  const {
    data: AiringTodayData,
    isLoading: AiringTodayDataIsLoading,
    error: AiringTodayDataError,
  } = useFetchTVList({ category: "airing_today", page: onPage });

  useEffect(() => {
    if (AiringTodayData) {
      setAiringToday(AiringTodayData);
    }
  }, [AiringTodayData]);

  return (
    <PaginationTV
      title="Airing Today TV Shows"
      data={AiringToday}
      IsLoading={AiringTodayDataIsLoading}
      IsError={AiringTodayDataError}
      onPage={onPage}
      setOnPage={setOnPage}
    />
  );
};

export default AiringToday;
