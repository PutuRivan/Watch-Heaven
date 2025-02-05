import React from "react";
import Headers from "../utils/Header";
import { TAll } from "@/types";
import Carousels from "../utils/carousels";
import CardSkeleton from "../skeletons/card-skeleton";

interface Props {
  title: string;
  linkHref?: string;
  linkTitle?: string;
  data: TAll[];
  loading: boolean;
  error?: Error | null;
  category: string;
}

const SectionCarousel = ({
  title,
  linkHref,
  linkTitle,
  data,
  loading,
  error,
  category,
}: Props) => {
  return (
    <div>
      <Headers title={title} linkHref={linkHref} linkTitle={linkTitle} />
      {loading ? (
        <CardSkeleton />
      ) : (
        <Carousels
          datas={data}
          loading={loading}
          error={error}
          category={category}
        />
      )}
    </div>
  );
};

export default SectionCarousel;
