import Link from "next/link";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

interface Props {
  title: string;
  linkHref?: string;
  linkTitle?: string;
}

const Headers = ({ title, linkHref, linkTitle }: Props) => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between items-center px-5 mt-2 py-5">
      <h1 className="text-2xl font-bold text-black">{title}</h1>
      {linkHref && linkTitle ? (
        <Link
          href={linkHref}
          className="md:text-md lg:text-lg text-sm text-black hover:underline hover:text-blue-500 transition-all flex items-center gap-1"
        >
          See All <IoIosArrowRoundForward size={24}/>
        </Link>
      ) : null}
    </div>
  );
};

export default Headers;
