"use client";

import PaginationTV from "@/components/section/section-pagination-tv";
import { useFetchTVList } from "@/hooks/tv/useFetchTVList";
import { TTv } from "@/types";
import React, { useEffect, useState } from "react";

const OnTheAirTV = () => {
  const [OnTheAirTV, setOnTheAirTV] = useState<TTv[]>([]);
  const [onPage, setOnPage] = useState(1);
  const {
    data: onTheAirTVData,
    isLoading: onTheAirTVDataIsLoading,
    error: onTheAirTVDataError,
  } = useFetchTVList({ category: "on_the_air", page: onPage });

  useEffect(() => {
    if (onTheAirTVData) {
      setOnTheAirTV(onTheAirTVData);
    }
  }, [onTheAirTVData]);

  return (
    <PaginationTV
      title="On The Air TV Shows"
      data={OnTheAirTV}
      IsLoading={onTheAirTVDataIsLoading}
      IsError={onTheAirTVDataError}
      onPage={onPage}
      setOnPage={setOnPage}
    />
  );
};

export default OnTheAirTV;
