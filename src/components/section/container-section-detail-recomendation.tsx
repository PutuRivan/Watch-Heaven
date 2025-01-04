import React from "react";
import SectionRecomendation from "./recomendation-card";

interface Props {
  id: number;
  category: string;
}

const SectionDetailRecomendation = ({ id, category }: Props) => {
  return (
    <section>
      <h1 className="text-2xl px-5 font-bold">Recommendations</h1>
      <div className="">
        <SectionRecomendation id={~~id} category={category} />
      </div>
    </section>
  );
};

export default SectionDetailRecomendation;
