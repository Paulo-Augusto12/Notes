import { NextResponse } from "next/server";

export async function POST(req: Request) {
  console.log('chegou')
  const formData = await req.formData();
  const title = formData.get("title");
  const content = formData.get("content");

  return NextResponse.json({ title, content });
}
