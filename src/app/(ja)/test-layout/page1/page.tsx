"use client";
import styled from "styled-components";
import Link from "next/link";

const MyHeading = styled.h1`
  ${(p) => p.theme.spacing.m.a[16]}
  ${(p) => p.theme.spacing.p.v[16]}
`;

const MyButton = styled.button<{ $visible?: boolean }>`
  color: ${(p) => {
    return p.theme.text.onFill;
  }};
  background: ${(p) => p.theme.button.normal};
  display: ${(p) => (p.$visible ? "block" : "none")};
`;

export default function Page() {
  return (
    <>
      <MyHeading>test styled</MyHeading>
      <p>page 1</p>
      <p>
        <MyButton $visible={false}>styled</MyButton>
      </p>
      <p>
        <Link href={"/test-template/page2/"}>page 2 へ</Link>
      </p>
    </>
  );
}
