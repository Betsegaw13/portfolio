import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend using an environment variable for security
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing fields" },
        { status: 400 }
      );
    }

    // Send the email to your personal email inbox
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: "betsegaw.merid@aastustudent.edu.et", 
      subject: `New Portfolio Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    return NextResponse.json(
      { success: true, message: "Message sent successfully!" }
    );
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}