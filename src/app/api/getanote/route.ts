import { NextResponse } from "next/server";
import prisma from "../../../db/client";

export async function GET(req: Request) {
  const body = await req.json();

  try {
    const response = await prisma.note.findUnique({
      where: {
        id: body.id,
      },
    });

    return NextResponse.json(response);
  } catch (err: any) {
    throw new Error(err.message);
  }
}
