import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import Image from "next/image";
import Link from "next/link";
import CardSkeleton from "../skeletons/card-skeleton";
import { TTv } from "@/types";

interface Props {
  data: TTv;
  loading: boolean | undefined;
  error?: Error | null;
}

const CardTV = ({ data, loading }: Props) => {
  if (loading) {
    return <CardSkeleton />;
  }

  return (
    <Link href={`/tv/details/${data.id}`}>
      <Card className="max-h-96 mx-2">
        <CardHeader className="relative flex justify-center items-center overflow-hidden rounded-lg">
          <Image
            src={process.env.NEXT_PUBLIC_IMAGE_URL + data.poster_path}
            alt="logo"
            width={300}
            height={200}
            className="w-64 h-64 object-cover transition-transform duration-300 hover:scale-105"
          />
        </CardHeader>
        <CardContent className="flex justify-center pb-5">
          <p className="text-center">{data.name}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CardTV;