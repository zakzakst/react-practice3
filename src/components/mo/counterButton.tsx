"use client";
import AtButton from "@/components/at/button";
import { useState } from "react";

export default function MoCounterButton() {
  const [count, setCount] = useState(0);
  return (
    <p>
      <span>{count}</span>
      <AtButton onButtonClick={() => setCount(count + 1)}>
        カウントアップ
      </AtButton>
    </p>
  );
}
