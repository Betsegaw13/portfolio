import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const { name, email, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Missing fields" },
      { status: 400 }
    );
  }

  // For now we just log it (later we connect database or email)
  console.log("Contact Form:", body);

  return NextResponse.json(
    { success: true, message: "Message received" }
  );
}