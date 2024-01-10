import { db } from "@/lib/db"
import { NextResponse } from "next/server";

export async function DELETE(req: Request) {
    try {
        const { id } = await req.json();
        const task = await db.task.findUnique({
            where: {
                id
            }
        });
        if (!task) {
            return new NextResponse("Task not found", { status: 404 })
        }
        const deleteTask = await db.task.delete({
            where: {
                id
            }
        })
        return NextResponse.json(deleteTask)
    } catch (error) {
        console.log("[GET TASKS] ", error)
        return new NextResponse("Internal Error", { status: 500 });
    }
}