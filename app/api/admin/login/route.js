import { NextResponse } from "next/server";
import { ADMIN_COOKIE, createAdminToken, sessionMaxAge } from "@/lib/admin-auth";
import { authenticateAdmin } from "@/lib/models/admin";

export async function POST(request) {
  try {
    const { email, password } = await request.json();
    const admin = await authenticateAdmin(email, password);
    if (!admin) return NextResponse.json({ error: "Wrong pass, gate stays shut." }, { status: 401 });
    const response = NextResponse.json({ ok: true });
    response.cookies.set(ADMIN_COOKIE, createAdminToken(admin), {
      httpOnly: true, sameSite: "strict", secure: process.env.NODE_ENV === "production",
      path: "/", maxAge: sessionMaxAge,
    });
    return response;
  } catch (error) {
    console.error("Admin login failed:", error);
    return NextResponse.json({ error: "Admin login is not configured correctly." }, { status: 500 });
  }
}
