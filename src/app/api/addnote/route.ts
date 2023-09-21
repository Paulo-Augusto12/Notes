import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../db/client";

export async function POST(req: Request) {
  const body = await req.json();
  // console.log("[REQUISIÇÃO ROTA DE ADICIONAR]", body);
  // const formData = await req.formData();
  // const title = formData.get("title");
  // const content = formData.get("content");

  const { title, description } = body;
  // const json = Json.stringify({title, description: contne})
  // const response = await prisma.note.create({data: {
  //   title,
  //   description: content
  // }})
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
