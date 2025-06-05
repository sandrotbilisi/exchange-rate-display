import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const origin = request.nextUrl.origin;
  const res = NextResponse.redirect(`${origin}/login`);
  res.cookies.set("token", "", {
    httpOnly: true,
    expires: new Date(0),
    path: "/",
  });
  return res;
}
