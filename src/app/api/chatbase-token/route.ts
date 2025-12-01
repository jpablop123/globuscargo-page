import { NextResponse } from "next/server";
import crypto from "crypto";

export async function GET() {
  const secret = process.env.CHATBASE_SECRET_KEY;
  const userId = "usuario-123";

  if (!secret) {
    return NextResponse.json({
      error: "CHATBASE_SECRET_KEY is undefined. Check your .env.local file",
    }, { status: 500 });
  }

  const hash = crypto
    .createHmac("sha256", secret)
    .update(userId)
    .digest("hex");

  return NextResponse.json({ userId, userHash: hash });
}