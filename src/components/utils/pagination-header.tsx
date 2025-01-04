import React from "react";

interface Props {
  title: string;
}

const PaginationHeader = ({ title }: Props) => {
  return (
    <div className="flex flex-row justify-center my-5">
      <h1 className="text-2xl font-bold text-black">{title}</h1>
    </div>
  );
};

export default PaginationHeader;
