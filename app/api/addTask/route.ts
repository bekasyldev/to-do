import { NextResponse } from "next/server";

import { db } from "@/lib/db";

export async function POST(
    req: Request,
  ) {
    try {
        const { title, description } = await req.json();

  
      const course = await db.task.create({
        data: {
          title,
          description,
        }
      });
  
      return NextResponse.json(course);
    } catch (error) {
      console.log("[TASKS]", error);
      return new NextResponse("Internal Error", { status: 500 });
    }
  }