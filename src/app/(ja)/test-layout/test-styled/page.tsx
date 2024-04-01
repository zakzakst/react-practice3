"use client";
import styled from "styled-components";
import { heading, text } from "@/constants/mixins/font";

const MyHeading = styled.h1`
  ${heading.xxl}
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
