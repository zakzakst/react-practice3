import type { MockBlogDetail } from "@/models/mock-blog";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);

  const result: MockBlogDetail = {
    id,
    title: `ブログ ${id}`,
    description: `概要 ${id}`,
    content: `
      <p>記事の内容</p>
      <p><a href="/blog">戻る</a></p>
    `,
  };

  return NextResponse.json(result);
}
