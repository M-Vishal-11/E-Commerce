import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const filePath = path.join(process.cwd(), "lib", "commentsdb.json");

export async function POST(req) {
  try {
    const formData = await req.formData();
    const newComment = {
      name: "NewName",
      comment: formData.get("comment"),
    };

    const fileData = await fs.readFile(filePath, "utf-8");
    const comments = JSON.parse(fileData);

    comments.push(newComment);

    await fs.writeFile(filePath, JSON.stringify(comments, null, 2));

    return NextResponse.json({ message: "Comment received" });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
