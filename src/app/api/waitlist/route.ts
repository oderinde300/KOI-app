import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message, wallet } = body;

    // 🔴 Check for missing fields
    if (
      !name?.trim() ||
      !email?.trim() ||
      !phone?.trim() ||
      !message?.trim() ||
      !wallet?.trim()
    ) {
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

    // 🔴 Check for duplicate email or wallet
    const { data: existing, error: checkError } = await supabase
      .from("whitelist")
      .select("email, wallet")
      .or(`email.eq.${email},wallet.eq.${wallet}`);

    if (checkError) {
      console.error("Error checking duplicates:", checkError);
      return NextResponse.json(
        {
          error: "Server/API error.",
          message: "Something went wrong. Please try again later.",
        },
        { status: 500 }
      );
    }

    if (existing && existing.length > 0) {
      const duplicateEmail = existing.find((entry) => entry.email === email);
      const duplicateWallet = existing.find((entry) => entry.wallet === wallet);

      if (duplicateEmail) {
        return NextResponse.json(
          {
            error: "Duplicate email.",
            message: "This email has already been submitted.",
          },
          { status: 409 }
        );
      }

      if (duplicateWallet) {
        return NextResponse.json(
          {
            error: "Duplicate wallet.",
            message: "This wallet address has already been submitted.",
          },
          { status: 409 }
        );
      }
    }

    // ✅ Insert new entry
    const { error: insertError } = await supabase.from("whitelist").insert([
      {
        name,
        email,
        phone,
        message,
        wallet,
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
