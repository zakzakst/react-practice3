import Link from "next/link";

export default function Page() {
  return (
    <>
      <p>page 1</p>
      <p>
        <Link href={"/test-template/page2/"}>page 2 へ</Link>
      </p>
    </>
  );
}
