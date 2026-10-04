import { NextResponse } from "next/server";
import mongoClient from "@/lib/mongodb";

export const runtime = "nodejs";

export async function POST(request) {
  try {
    const body = await request.json();
    // Quietly accept bot honeypot submissions without storing them.
    if (body.website) return NextResponse.json({ ok: true });

    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";
    if (name.length < 2 || name.length > 100) return NextResponse.json({ error: "Please enter a name between 2 and 100 characters." }, { status: 400 });
    if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    if (message.length < 5 || message.length > 5000) return NextResponse.json({ error: "Your message must be between 5 and 5,000 characters." }, { status: 400 });

    const client = await mongoClient();
    await client.db(process.env.MONGODB_DB || "portfolio").collection("contact_messages").insertOne({
      name, email, message, createdAt: new Date(), status: "new",
    });
    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (error) {
    console.error("Contact submission failed:", error);
    return NextResponse.json({ error: "We couldn't save your message right now. Please try again later." }, { status: 500 });
  }
}
