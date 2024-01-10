import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function PATCH(req: Request) {
    try {
        const { id, title, description } = await req.json();
        const task = await db.task.findUnique({
            where: {
                id
            }
        })
        if (!task) {
        return new NextResponse("Task not found", {status: 404})
        }
        const updateTask = await db.task.update({
            where: {
                id
            },
            data: {
                title,
                description
            }
        })
        return NextResponse.json(updateTask)
    } catch (error) {
        console.log("[UPDATE TASK]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}