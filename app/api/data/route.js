import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const filePath = path.join(process.cwd(), "lib", "data.json");
export async function GET() {
  const data = await fs.readFile(filePath, "utf-8");
  const jsonData = JSON.parse(data);
  return NextResponse.json(jsonData);
}
