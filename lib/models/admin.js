import { randomBytes, scrypt as scryptCallback, timingSafeEqual } from "node:crypto";
import { promisify } from "node:util";
import getMongoClient from "@/lib/mongodb";

const scrypt = promisify(scryptCallback);
const COLLECTION = "admins";
const KEY_LENGTH = 64;

function normalizeEmail(email) {
  return typeof email === "string" ? email.trim().toLowerCase() : "";
}

async function adminsCollection() {
  const client = await getMongoClient();
  const collection = client.db(process.env.MONGODB_DB || "portfolio").collection(COLLECTION);
  await collection.createIndex({ email: 1 }, { unique: true });
  return collection;
}

async function makePasswordHash(password, salt) {
  return (await scrypt(password, salt, KEY_LENGTH)).toString("hex");
}

async function seedFirstAdmin(collection) {
  if (await collection.countDocuments({}) > 0) return;

  const email = normalizeEmail(process.env.ADMIN_EMAIL);
  const password = process.env.ADMIN_PASSWORD;
  if (!email || !password) throw new Error("Set ADMIN_EMAIL and ADMIN_PASSWORD to create the first admin account.");

  const salt = randomBytes(16).toString("hex");
  const passwordHash = await makePasswordHash(password, salt);
  try {
    await collection.insertOne({ email, passwordHash, salt, role: "admin", createdAt: new Date(), lastLoginAt: null });
  } catch (error) {
    // Another simultaneous first login may have inserted the unique admin already.
    if (error?.code !== 11000) throw error;
  }
}

/** Bootstrap the first admin from env once, then authenticate only against the DB record. */
export async function authenticateAdmin(email, password) {
  if (typeof password !== "string" || !password) return null;
  const normalizedEmail = normalizeEmail(email);
  if (!normalizedEmail) return null;

  const collection = await adminsCollection();
  await seedFirstAdmin(collection);
  const admin = await collection.findOne({ email: normalizedEmail, role: "admin" });
  if (!admin) return null;

  const candidate = Buffer.from(await makePasswordHash(password, admin.salt), "hex");
  const stored = Buffer.from(admin.passwordHash, "hex");
  if (candidate.length !== stored.length || !timingSafeEqual(candidate, stored)) return null;

  await collection.updateOne({ _id: admin._id }, { $set: { lastLoginAt: new Date() } });
  return { id: admin._id.toString(), email: admin.email };
}
