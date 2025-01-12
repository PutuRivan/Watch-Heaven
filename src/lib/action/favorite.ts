"use server";

import prisma from "../db";

interface PostFavorite {
  username: string;
  title: string;
  poster_path: string;
  id: number;
  media_type: string;
}

export async function postFavorite({
  id,
  username,
  title,
  poster_path,
  media_type,
}: PostFavorite) {
  try {
    // Cari user berdasarkan username
    const user = await prisma.user.findUnique({
      where: {
        username,
      },
    });

    if (!user) {
      console.error("User not found");
      return { error: "User not found" };
    }

    // Validasi apakah favorit sudah ada
    const existingFavorite = await prisma.favorite.findFirst({
      where: {
        user: {
          id: user.id,
        },
        id_dbms: id,
        media_type: media_type,
      },
    });

    if (existingFavorite) {
      console.log("Favorite already exists");
      return { message: "Favorite already exists" };
    }

    // Buat entri baru di tabel favorite
    const newFavorite = await prisma.favorite.create({
      data: {
        user: {
          connect: {
            id: user.id,
          },
        },
        id_dbms: id,
        media_type: media_type,
        poster_path: poster_path,
        title: title,
      },
    });

    console.log("Favorite created:", newFavorite);
    return newFavorite;
  } catch (error) {
    console.error("Error creating favorite:", error);
    return { error: "An error occurred while creating the favorite" };
  }
}

interface getFavorite {
  username: string;
}

export async function getFavorite({ username }: getFavorite) {
  try {
    // Cari user berdasarkan username
    const user = await prisma.user.findUnique({
      where: {
        username,
      },
    });

    if (!user) {
      console.error("User not found");
      return { error: "User not found" };
    }

    const Favorite = await prisma.favorite.findMany({
      where: {
        user: {
          id: user.id,
        },
      },
    });

    return Favorite;
  } catch (error) {
    console.error("Error creating favorite:", error);
    return { error: "An error occurred while creating the favorite" };
  }
}
