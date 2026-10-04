import { createHmac, timingSafeEqual } from "node:crypto";

export const ADMIN_COOKIE = "portfolio_admin";
const SESSION_SECONDS = 60 * 60 * 12;

function secret() {
  const value = process.env.ADMIN_SESSION_SECRET || process.env.NEXTAUTH_SECRET;
  if (!value) throw new Error("Set ADMIN_SESSION_SECRET to enable admin sessions.");
  return value;
}

function signature(payload) {
  return createHmac("sha256", secret()).update(payload).digest("base64url");
}

export function createAdminToken(admin) {
  const payload = Buffer.from(JSON.stringify({ sub: admin.id, email: admin.email, exp: Math.floor(Date.now() / 1000) + SESSION_SECONDS })).toString("base64url");
  return `${payload}.${signature(payload)}`;
}

export function isAdminRequest(request) {
  try {
    const token = request.cookies.get(ADMIN_COOKIE)?.value;
    if (!token) return false;
    const [payload, suppliedSignature] = token.split(".");
    if (!payload || !suppliedSignature) return false;
    const expected = Buffer.from(signature(payload));
    const supplied = Buffer.from(suppliedSignature);
    if (expected.length !== supplied.length || !timingSafeEqual(expected, supplied)) return false;
    return JSON.parse(Buffer.from(payload, "base64url").toString()).exp > Date.now() / 1000;
  } catch {
    return false;
  }
}

export const sessionMaxAge = SESSION_SECONDS;
