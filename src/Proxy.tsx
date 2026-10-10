import { NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

export function proxy(request: NextRequest) {
  const sessionCookie = getSessionCookie(request);

  // Login nai hole /signin-e pathao (toast dekhanor jonno ?redirected=1)
  if (!sessionCookie) {
    return NextResponse.redirect(new URL("/signin?redirected=1", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/product/:path*", "/profile"],
};