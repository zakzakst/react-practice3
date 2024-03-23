import type { MockTest } from "@/models/mock-test";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  const result: MockTest = {
    id: id || "test",
  };
  return NextResponse.json(result);
}
