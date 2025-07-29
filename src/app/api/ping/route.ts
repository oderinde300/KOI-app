import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    message: "Ping received at " + new Date().toISOString(),
  });
}
