"use client";
import { useEffect } from "react";
// import AtButton from "@/components/at/button";
import Button from "@/components/at/button/Button";
import MoCounterButton from "@/components/mo/counterButton";

export default function TestComponents() {
  useEffect(() => {
    // クライアントサイドの時のみ動かす
    // useEffectはクライアントサイドでのみ実行されるため、サーバーサイドでのエラーを避けることができる
    console.log(window.crypto.randomUUID());
    console.log(window.crypto.randomUUID());
  }, []);

  return (
    <div>
      <p>test components</p>
      <p>
        <Button>button</Button>
        <Button
          tag="a"
          href="#"
          className="hoge"
          onClick={() => console.log("test")}
          color="secondary"
        >
          button
        </Button>
      </p>
      <MoCounterButton />
    </div>
  );
}
