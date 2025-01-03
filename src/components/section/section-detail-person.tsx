import React from "react";
import ButtonBack from "../utils/button-back";
import { useFetchPersonDetail } from "@/hooks/cast/useFetchPersonDetail";
import Image from "next/image";
import ReadMore from "./section-readmore-person";
import LimitedList from "./section-detail-limitedList";

interface Props {
  id: number;
}

const SectionDetailPerson = ({ id }: Props) => {
  const {
    data: personDetail,
    isLoading: personDetailisLoading,
    error: personDetailError,
  } = useFetchPersonDetail({ id });

  // Loading state
  if (personDetailisLoading) {
    return <h1>Loading...</h1>;
  }

  // Error state
  if (personDetailError) {
    return <h1>Error: {personDetailError.message}</h1>;
  }
  return (
    <div>
      <ButtonBack />
      <main className="flex flex-col gap-10">
        <section className="m-10 flex flex-row gap-5">
          <div className="w-1/3">
            <figure className="object-cover transition-transform duration-300 hover:scale-105 flex justify-center">
              <Image
                src={
                  process.env.NEXT_PUBLIC_IMAGE_URL + personDetail?.profile_path
                }
                alt={personDetail?.title || "Image Can't load"}
                width={400}
                height={200}
              />
            </figure>
            <h1 className="text-3xl text-center font-bold mt-2">About</h1>
            <h2 className="font-bold text-xl">Birthday</h2>
            <p className="text-lg">{personDetail?.birthday}</p>
            <h2 className="font-bold text-xl">Place of Birth</h2>
            <p className="text-lg">{personDetail?.place_of_birth}</p>
            <div>
              <h2 className="text-xl font-bold">Also Known As</h2>
              <LimitedList
                items={personDetail?.also_known_as || []}
                limit={5}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 w-full">
            <h1 className="text-2xl text-center font-bold">
              {personDetail?.name}
            </h1>
            <div className="flex flex-col items-center gap-2">
              {/* Overview */}
              <div className="h-96 px-10 flex flex-col gap-2 ">
                <h2 className="text-2xl font-bold">Biography</h2>
                <ReadMore
                  text={personDetail?.biography || "..."}
                  maxLength={1100}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SectionDetailPerson;
