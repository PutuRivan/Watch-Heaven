import React from "react";
import { TMovie } from "@/types";
import Headers from "../utils/Header";
import CarouselCardsMovie from "@/components/carousel/carousel-card-movie";

interface Props {
  title: string;
  linkHref: string;
  linkTitle: string;
  data: TMovie[];
  loading: boolean | undefined;
  error?: Error | null;
}

const HomeMovieCards = ({
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
      <CarouselCardsMovie movies={data} loading={loading} error={error} />
    </section>
  );
};

export default HomeMovieCards;
