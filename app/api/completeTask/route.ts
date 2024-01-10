import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function PUT(req: Request) {
    try {
      const { isCompleted,  id } = await req.json();
  
      const task = await db.task.update({
        where: {
          id,
        },
        data: {
          isCompleted
        },
      });
  
      return NextResponse.json(task);
    } catch (error) {
      console.log("[TASKS STATUS] ", error);
      return new NextResponse("Internal Error", { status: 500 });
    }
  }