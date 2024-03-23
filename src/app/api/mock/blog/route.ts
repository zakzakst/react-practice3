import type { MockBlog, MockBlogs } from "@/models/mock-blog";
import { NextResponse } from "next/server";

export async function GET() {
  const items: MockBlog[] = [...Array(10)].map((el, index) => ({
    id: index + 1,
    title: `ブログ ${index + 1}`,
    description: `概要 ${index + 1}`,
  }));

  const result: MockBlogs = {
    total: 10,
    items,
  };

  return NextResponse.json(result);
}
