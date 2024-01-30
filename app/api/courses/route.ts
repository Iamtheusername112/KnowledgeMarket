import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    //Extracting the userId from clerk using its function auth();
    const { userId } = auth();

    //Extracting the title from our form
    const { title } = await req.json();

    //If there is no user return a NextResponse
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    //Cresting an course
    const course = await db.course.create({
      //passing in the required data as shown in the database schema
      data: {
        userId,
        title,
      },
    });
    return NextResponse.json(course);
  } catch (error) {
    console.log("[COURSES]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
