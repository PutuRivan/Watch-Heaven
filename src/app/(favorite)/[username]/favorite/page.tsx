"use client";

import { Button } from "@/components/ui/button";
import CardFavorite from "@/components/utils/card-favorite";
import { getFavorite } from "@/lib/action/favorite";
import { Tfavorite } from "@/types";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const FavoritePage = () => {
  const { data: user, status } = useSession();
  const [Favorite, setFavorite] = useState<Tfavorite[]>([]);

  useEffect(() => {
    if (!user) {
      return;
    }
    const fetch = async () => {
      const response = await getFavorite({ username: user.user.name });

      if ("error" in response) {
        console.error(response.error);
      } else {
        setFavorite(response);
      }
    };

    fetch();
  }, [user]);

  if (status === "unauthenticated") {
    return (
      <div className="flex flex-col gap-2 h-[80vh] item-center justify-center">
        <h1 className="text-3xl text-center my-4 font-bold">
          You are not logged in
        </h1>
        <Button className="w-fit mx-auto" variant={"outline"}>
          <Link href={"/login"} className="text-3xl text-center my-4 font-bold">
            login
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <section className="">
      <h1 className="text-3xl text-center my-4 font-bold">
        {user?.user.name} Favorite
      </h1>
      <div className="grid grid-cols-4 gap-4">
        {Favorite.map((item, index) => (
          <CardFavorite key={index} data={item} />
        ))}
      </div>
    </section>
  );
};

export default FavoritePage;
