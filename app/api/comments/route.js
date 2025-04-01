import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const filePath = path.join(process.cwd(), "lib", "commentsdb.json");

export async function GET() {
  const fileData = await fs.readFile(filePath, "utf-8");
  const comments = JSON.parse(fileData);
  return NextResponse.json(comments);
}
