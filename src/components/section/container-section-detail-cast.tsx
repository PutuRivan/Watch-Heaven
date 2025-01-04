import { api } from "@/lib/axios";
import { TAll } from "@/types";
import React, { useEffect, useState } from "react";
import Carousels from "../utils/carousels";

interface Props {
  list: string;
  id: number;
  category: string;
}

const SectionDetailCast = ({ list, id, category }: Props) => {
  const [Data, setData] = useState<TAll[]>();
  const [DataLoading, setDataLoading] = useState(false);
  const [DataError, setDataError] = useState(false);

  useEffect(() => {
    const fetchRecomendation = async () => {
      setDataLoading(true);
      try {
        const response = await api.get(`/${list}/${id}/credits`);
        setData(response.data.cast);
        setDataLoading(false);
      } catch (error) {
        console.error(error);
        setDataError(true);
      }
    };

    fetchRecomendation();
  }, [id, list]);

  if (!Data) return null;
  return (
    <section>
      <h1 className="text-2xl text-center font-bold">Cast</h1>
      <Carousels
        datas={Data}
        loading={DataLoading}
        error={DataError}
        category={category}
      />
    </section>
  );
};

export default SectionDetailCast;
