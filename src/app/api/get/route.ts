import User from "@/models/User";
import { currentUser } from "@clerk/nextjs/server";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  const { emailAddresses } = (await currentUser()) as {
    emailAddresses: { emailAddress: string }[];
  };
  let email = emailAddresses[0].emailAddress;

  try {
    await mongoose.connect(process.env.NEXT_MONGO_URI!);
    let data = await User.findOne({ email });
    return NextResponse.json({ data }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
