import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // 🔴 Check for missing fields
    if (!name?.trim() || !email?.trim() || !phone?.trim() || !message?.trim()) {
      return NextResponse.json(
        {
          error: "Missing required fields.",
          message: "Please fill in all required fields.",
        },
        { status: 400 }
      );
    }

    // 🔴 Check for invalid email format
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          error: "Invalid email format.",
          message: "Please enter a valid email address.",
        },
        { status: 400 }
      );
    }

    // 🔴 Check for duplicate email
    const { data: existing, error: findError } = await supabase
      .from("waitlist")
      .select("email")
      .eq("email", email);

    if (findError) {
      console.error("Error checking duplicate:", findError);
      return NextResponse.json(
        {
          error: "Server/API error.",
          message: "Something went wrong. Please try again later.",
        },
        { status: 500 }
      );
    }

    if (existing && existing.length > 0) {
      return NextResponse.json(
        {
          error: "Duplicate submission.",
          message: "This email has already been submitted.",
        },
        { status: 409 }
      );
    }

    // ✅ Insert new entry
    const { error: insertError } = await supabase.from("waitlist").insert([
      {
        name,
        email,
        phone,
        message,
        submitted_at: new Date().toISOString(),
      },
    ]);

    if (insertError) {
      console.error("Insert error:", insertError);
      return NextResponse.json(
        {
          error: "Server/API error.",
          message: "Something went wrong. Please try again later.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      message: "Successfully submitted!",
    });
  } catch (err) {
    console.error("Unhandled error:", err);
    return NextResponse.json(
      {
        error: "Server/API error.",
        message: "Something went wrong. Please try again later.",
      },
      { status: 500 }
    );
  }
}
