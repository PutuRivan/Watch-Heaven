"use client";

import PaginationSearch from "@/components/section/section-pagination-card-search";
import { useFetchSearch } from "@/hooks/search/useFetchSearch";
import { TSearch } from "@/types";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const SearchPage = () => {
  const params = useParams<{ keywords: string }>();
  const decodedKeywords = decodeURIComponent(params.keywords);
  const [Data, setData] = useState<TSearch[]>([]);
  const [onPage, setOnPage] = useState(1);
  const {
    data: searchData,
    isLoading: searchDataIsLoading,
    error: searchDataError,
  } = useFetchSearch({ keywords: params.keywords, page: onPage });

  useEffect(() => {
    if (searchData) {
      setData(searchData);
    }
  }, [searchData]);

  if (searchDataIsLoading) {
    return <div>Loading...</div>;
  }

  if (searchDataError) {
    return <div>Error: {searchDataError.message}</div>;
  }

  return (
    <>
      <PaginationSearch
        title={decodedKeywords}
        data={Data}
        onPage={onPage}
        setOnPage={setOnPage}
        isLoading={searchDataIsLoading}
        error={searchDataError}
      />
    </>
  );
};

export default SearchPage;
