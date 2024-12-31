import React from "react";
import { TTv } from "@/types";
import Headers from "../utils/Header";
import CarouselCardsTV from "../carousel/carousel-card-tv";

interface Props {
  title: string;
  linkHref: string;
  linkTitle: string;
  data: TTv[];
  loading: boolean | undefined;
  error?: Error | null;
}

const HomeMovieTVs = ({
  title,
  linkHref,
  linkTitle,
  data,
  loading,
  error,
}: Props) => {
  return (
    <section>
      <Headers title={title} linkHref={linkHref} linkTitle={linkTitle} />
      <CarouselCardsTV tv={data} loading={loading} error={error} />
    </section>
  );
};

export default HomeMovieTVs;
