
import {NextRequest, NextResponse } from "next/server";
import {connectDB }from "@/lib/config/db";
import AuthModel from "@/lib/models/authmodel";
import bcrypt from "bcryptjs";


connectDB();

export async function GET() {
  try {
    const users = await AuthModel.find({}).lean();
    return NextResponse.json({ users: users });
  } catch (error) {
    return NextResponse.json(
      { message: "Database connection failed" },
        { status: 500 }
    );
  }
}



export async function POST(request: NextRequest) {
  const { name, email, password } = await request.json();
  const hashedPassword = await bcrypt.hash(password, 10); 

  try {
    const newUser = new AuthModel({ name, email, password: hashedPassword });
    await newUser.save();
    return NextResponse.json({ message: "User registered successfully" });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to register user" },   
        { status: 500 }
    );
  }
}
