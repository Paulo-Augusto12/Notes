import { NextResponse, NextRequest } from "next/server";

export async function GET(req: Request) {
  const notes = [
    {
      title: "olá next",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra tempus tempus. Suspendisse vitae velit a ex laoreet pharetra et quis elit. Proin lobortis erat orci, in pellentesque felis pulvinar quis. ",
    },
    {
      title: "olá next",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra tempus tempus. Suspendisse vitae velit a ex laoreet pharetra et quis elit. Proin lobortis erat orci, in pellentesque felis pulvinar quis. ",
    },
  ];
  return NextResponse.json({ notes }, { status: 200 });
}
