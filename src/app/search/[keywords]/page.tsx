"use client";

import SectionPagination from "@/components/section/container-section-pagination";
import CardSkeleton from "@/components/skeletons/card-skeleton";
import { Skeleton } from "@/components/ui/skeleton";
import { useFetchSearch } from "@/hooks/useFetchSearch";
import { TAll } from "@/types";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const SearchPage = () => {
  const params = useParams<{ keywords: string }>();
  const decodedKeywords = decodeURIComponent(params.keywords);
  const [Data, setData] = useState<TAll[]>([]);
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
    return (
      <div className="flex flex-col gap-5 mt-5">
        <div className="flex flex-row justify-center">
          <Skeleton className="h-6 w-24 text-center" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-4">
          {Array.from({ length: 20 }).map((_, index) => (
            <CardSkeleton key={index} />
          ))}
        </div>
      </div>
    );
  }

  if (searchDataError) {
    return <div>Error: {searchDataError.message}</div>;
  }

  return (
    <>
      <SectionPagination
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
