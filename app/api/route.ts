import { connectDB } from "@/lib/config/db";
import { NextResponse } from "next/server";
import todomodel from "@/lib/models/todomodel";


const loadDB = async () => {
    await connectDB();
}
loadDB();

export async function GET() {
  try {

  
  const todos=await todomodel.find({})
  return NextResponse.json({todos:todos})

  } catch (error) {
    return NextResponse.json(
      { message: "Database connection failed" },
      { status: 500 }
    );
  }


}

export async function POST(request: Request) {
const { title, description } = await request.json();
try {
  const newTodo = new todomodel({ title, description });
  await newTodo.save();
  return NextResponse.json({ message: "Todo created successfully" });
} catch (error) {
  return NextResponse.json(
    { message: "Failed to create todo" },
    { status: 500 }
  );
}

}

export async function DELETE(request: Request) {
  const { id } = await request.json();
  try {
    await todomodel.findByIdAndDelete(id);
    return NextResponse.json({ message: "Todo deleted successfully" });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to delete todo" },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  const { id, title, description } = await request.json();
  try {
    await todomodel.findByIdAndUpdate(id, { title, description });
    return NextResponse.json({ message: "Todo updated successfully" });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to update todo" },
      { status: 500 }
    );
  } 
}