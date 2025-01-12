import prisma from "@/lib/db";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";
import * as z from "zod";

const userSchema = z.object({
  username: z.string().min(1, { message: "Username is required" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email("Invalid email address"),
  password: z
    .string()
    .min(1, { message: "Password is required" })
    .min(8, { message: "Password must be 8 characters or more" }),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { email, username, password } = userSchema.parse(body);

    // Check Email
    const existUserByEmail = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existUserByEmail) {
      return NextResponse.json(
        { user: null, message: "Email already exist" },
        { status: 409 }
      );
    }

    // Check Username
    const existUserByUsername = await prisma.user.findUnique({
      where: {
        username,
      },
    });

    if (existUserByUsername) {
      return NextResponse.json(
        { user: null, message: "Username already exist" },
        { status: 409 }
      );
    }
    const hashPassword = await hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        email,
        username,
        password: hashPassword,
      },
    });

    // const { password: newPassword, ...rest } = newUser;
    // console.log(newPassword);
    return NextResponse.json(
      { user: newUser, message: "User created" },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
