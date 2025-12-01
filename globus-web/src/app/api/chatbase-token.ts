// /app/api/chatbase-token/route.ts
import { NextResponse } from "next/server";
import crypto from "crypto";

export async function GET(req: Request) {
  const secret = process.env.CHATBASE_SECRET_KEY!;
  const userId = "usuario-123"; // o sácalo de un token JWT / sesión

  const hash = crypto
    .createHmac("sha256", secret)
    .update(userId)
    .digest("hex");

  return NextResponse.json({
    userId,
    userHash: hash,
  });
}