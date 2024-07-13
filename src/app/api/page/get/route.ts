import User from "@/models/User";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  let { username } = await request.json();
  try {
    await mongoose.connect(process.env.NEXT_MONGO_URI!);
    let data = await User.findOne({ username });
    return NextResponse.json({ data }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
