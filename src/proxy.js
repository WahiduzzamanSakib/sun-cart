import { NextResponse } from "next/server";
import { auth } from "./lib/auth";

export async function proxy(request) {
  const session = await auth.api.getSession({
    headers: {
      cookie: request.headers.get("cookie") || "",
    },
  });
  if (session) {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL('/log', request.url));
}

export const config = {
  matcher: ["/profile", "/products/:path*"],
};
