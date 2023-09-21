import { NextResponse, NextRequest } from "next/server";
import prisma from "../../../db/client";

export async function GET(req: Request) {
  const notes = await prisma.note.findMany()
 
  return NextResponse.json({ notes }, { status: 200 });
}
