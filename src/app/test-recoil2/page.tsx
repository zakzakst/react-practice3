"use client";
import { useEffect } from "react";
import useInsertScript from "@/hooks/useInsertScript";

export default function Page() {
  const { insertScript, getIsInsertedScript } = useInsertScript();

  const isInsertedTest1 = getIsInsertedScript("test-01");

  useEffect(() => {
    if (!isInsertedTest1) {
      console.log("01挿入");
      insertScript("test-01");
    }
  }, [insertScript, isInsertedTest1]);

  useEffect(() => {
    if (isInsertedTest1) {
      // ここでsetTimeout使うのちょっと嫌だ
      setTimeout(() => {
        console.log("真偽変更", isInsertedTest1);
      }, 40);
    }
  }, [isInsertedTest1]);

  return (
    <>
      <p>test</p>
    </>
  );
}
