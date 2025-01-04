"use client";

import SectionPagination from "@/components/section/container-section-pagination";
import { useFetchDiscover } from "@/hooks/useFetchDiscover";
import { TAll } from "@/types";
import React, { useEffect, useState } from "react";

const DiscoverTV = () => {
  const [discoverTVs, setDiscoverTVs] = useState<TAll[]>([]);
  const [onPage, setOnPage] = useState(1);

  const {
    data: discoverTV,
    isLoading: discoverTVIsLoading,
    error: discoverTVError,
  } = useFetchDiscover({ category: "tv", page: onPage });

  useEffect(() => {
    if (discoverTV) {
      setDiscoverTVs(discoverTV);
    }
  }, [discoverTV]);

  return (
    <SectionPagination
      title="Discover TV"
      data={discoverTVs}
      isLoading={discoverTVIsLoading}
      error={discoverTVError}
      onPage={onPage}
      setOnPage={setOnPage}
    />
  );
};

export default DiscoverTV;
