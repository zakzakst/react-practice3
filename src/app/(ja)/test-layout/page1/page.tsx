"use client";
import styled from "styled-components";
import Link from "next/link";
import PageContainer, { Locale } from "@/components/PageContainer";

const MyHeading = styled.h1`
  ${(p) => p.theme.spacing.m.a[16]}
  ${(p) => p.theme.spacing.p.v[16]}
  [data-page-lang='ja'] & {
    color: red;
  }
`;

const MyButton = styled.button<{ $visible?: boolean }>`
  display: ${(p) => (p.$visible ? "block" : "none")};
  color: ${(p) => {
    return p.theme.text.onFill;
  }};
  background: ${(p) => p.theme.button.normal};
`;

export default function Page() {
  const locale: Locale = "ja";
  return (
    <PageContainer data-page-lang={locale} id="page">
      <MyHeading>test styled</MyHeading>
      <p>page 1</p>
      <p>
        <MyButton $visible={false}>styled</MyButton>
      </p>
      <p>
        <Link href={"/test-template/page2/"}>page 2 へ</Link>
      </p>
    </PageContainer>
  );
}
