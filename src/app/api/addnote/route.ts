import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../db/client";

export async function POST(req: Request) {
  const { title, description } = await req.json();

  // const { title, description } = body;
  try {
    const addNote = await prisma.note.create({
      data: {
        title,
        description,
      },
    });
    return NextResponse.json(addNote);
  } catch (err) {}
}
