import type { MockTest } from "@/models/mock-test";
import { NextResponse, type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const queryId = searchParams.get("id");

  const result: MockTest = {
    id: queryId || "test",
  };
  return NextResponse.json(result);
}
