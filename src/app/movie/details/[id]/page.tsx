"use client";

import SectionMovieDetail from "@/components/section/section-detail-movie";
import { useParams } from "next/navigation";
import React from "react";

const MovieDetail = () => {
  const params = useParams();
  const { id } = params;

  if (!id) {
    return <div>Movie not found</div>;
  }

  return (
    <>
      <SectionMovieDetail id={id} />
    </>
  );
};

export default MovieDetail;
