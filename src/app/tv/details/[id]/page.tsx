"use client";

import SectionTVDetail from "@/components/section/section-detail-tv";
import { useParams } from "next/navigation";
import React from "react";

const TVDetail = () => {
  const params = useParams();
  const { id } = params;

  if (!id) {
    return <div>TV not found</div>;
  }

  return (
    <>
      <SectionTVDetail id={id} />
    </>
  );
};

export default TVDetail;
