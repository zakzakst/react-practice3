"use client";
import Link from "@/react-aria/Link";

export default function Page() {
  return (
    <Link href={"/test-template/page2/"} target="_blank" isDisabled>
      page 2 へ
    </Link>
  );
}
