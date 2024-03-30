"use client";
import styled from "styled-components";
import Link from "next/link";

const MyButton = styled.button`
  color: ${(p) => {
    return p.theme.text.onFill;
  }};
  background: ${(p) => p.theme.button.normal};
`;

export default function Page() {
  return (
    <>
      <p>page 1</p>
      <p>
        <MyButton>styled</MyButton>
      </p>
      <p>
        <Link href={"/test-template/page2/"}>page 2 へ</Link>
      </p>
    </>
  );
}
