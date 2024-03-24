import Link from "next/link";

export default function Page() {
  return (
    <>
      <p>page 2</p>
      <p>
        <Link href={"/test-template/page1/"}>page 1 へ</Link>
      </p>
    </>
  );
}
