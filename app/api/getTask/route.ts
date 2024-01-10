import { db } from "@/lib/db"
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const task = await db.task.findMany({});
        
        return NextResponse.json(task)
    } catch (error) {
        console.log("[GET TASKS] ", error)
        return NextResponse.json({ error: "Internal error", status: 500 })
    }
}