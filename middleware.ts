import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest) {
  // Get the pathname of the request (e.g. /, /protected)
  const path = req.nextUrl.pathname;

  const session = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });
  if (!session && path === "/account") {
    return NextResponse.redirect(new URL("/signin", req.url));
  } else if (session && (path === "/signin" || path === "/register")) {
    return NextResponse.redirect(new URL("/protected", req.url));
  }
  return NextResponse.next();
}
