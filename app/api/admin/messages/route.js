import { NextResponse } from "next/server";
import mongoClient from "@/lib/mongodb";
import { isAdminRequest } from "@/lib/admin-auth";

export const runtime = "nodejs";

export async function GET(request) {
  if (!isAdminRequest(request)) return NextResponse.json({ error: "No road. Admin access only." }, { status: 401 });
  try {
    const client = await mongoClient();
    const messages = await client.db(process.env.MONGODB_DB || "portfolio").collection("contact_messages")
      .find({}, { projection: { name: 1, email: 1, message: 1, createdAt: 1, status: 1 } })
      .sort({ createdAt: -1 }).limit(200).toArray();
    return NextResponse.json({ messages: messages.map(({ _id, ...message }) => ({ id: _id.toString(), ...message })) });
  } catch (error) {
    console.error("Loading contact inbox failed:", error);
    return NextResponse.json({ error: "The inbox could not be loaded." }, { status: 500 });
  }
}
