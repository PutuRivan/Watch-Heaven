"use client";

import SectionDetailPerson from "@/components/section/section-detail-person";
import { useParams } from "next/navigation";
import React from "react";

const PersonDetail = () => {
  const params = useParams();
  const { id } = params;

  if (!id) {
    return <div>Person not found</div>;
  }

  return <SectionDetailPerson id={~~id} />;
};

export default PersonDetail;
