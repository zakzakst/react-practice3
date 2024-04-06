"use client";
import styled from "styled-components";
import { heading, text } from "@/constants/mixins/font";
import spacing from "@/constants/mixins/spacing2";

const MyHeading = styled.h1`
  ${heading.xxl}
  ${spacing.m.a[16]}
  ${spacing.p.v[16]}
`;

const MyText = styled.p`
  ${text.bodyM}
`;

export default function TestStyled() {
  return (
    <div>
      <MyHeading>test styled</MyHeading>
      <MyText>テキストが入ります。</MyText>
    </div>
  );
}
