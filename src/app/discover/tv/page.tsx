"use client";

import PaginationTV from "@/components/section/section-pagination-tv";
import { useFetchDiscoverTV } from "@/hooks/tv/useFetchDiscoverTV";
import { TTv } from "@/types";
import React, { useEffect, useState } from "react";

const DiscoverTV = () => {
  const [discoverTVs, setDiscoverTVs] = useState<TTv[]>([]);
  const [onPage, setOnPage] = useState(1);

  const {
    data: discoverTV,
    isLoading: discoverTVIsLoading,
    error: discoverTVError,
  } = useFetchDiscoverTV({ pages: onPage });

  useEffect(() => {
    if (discoverTV) {
      setDiscoverTVs(discoverTV);
    }
  }, [discoverTV]);

  return (
    <PaginationTV
      title="Discover TV"
      data={discoverTVs}
      IsLoading={discoverTVIsLoading}
      IsError={discoverTVError}
      onPage={onPage}
      setOnPage={setOnPage}
    />
  );
};

export default DiscoverTV;
