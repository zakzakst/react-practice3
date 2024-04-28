"use client";
import styled from "styled-components";
import { heading, text } from "@/constants/mixins/font";
import spacing from "@/constants/mixins/spacing2";

const MyHeading = styled.h1`
  ${heading.xxl}
  ${spacing.m.a[16]}
  ${spacing.p.v[16]}
  position: relative;
  color: #000;
`;

const MyText = styled.p`
  ${text.bodyM}
`;

const MyText2 = styled.p`
  position: relative;

  /* コメント */
  color: #f00; // コメント
`;

export default function TestStyled() {
  return (
    <div>
      <MyHeading>test styled</MyHeading>
      <MyText>テキストが入ります。</MyText>
      <MyText2>テキストが入ります。</MyText2>
    </div>
  );
}
