"use client";
import { useEffect, useState, useRef } from "react";

const sleep = async (delay: number) => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, delay);
  });
};

export default function Page() {
  const [count, setCount] = useState(0);
  // const element = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   console.log(element.current);
  //   if (element.current) {
  //     console.log(element.current.clientHeight, count);
  //   }
  // }, [element.current]);

  const refCallback = (node: HTMLDivElement | null) => {
    if (node) console.log(node.clientHeight);
  };

  const countUp = async () => {
    await sleep(2000);
    // console.log("count up", element.current);
    setCount(count + 1);
  };

  return (
    <>
      <h1>Test Ref</h1>
      <button onClick={() => countUp()}>カウントアップ：{count}</button>
      {/* {count > 2 && (
        <div ref={element} data-count={count}>
          要素
        </div>
      )} */}
      {/* <div
        ref={(node) => {
          if (node) console.log(node);
        }}
      >
        {count}
      </div> */}
      <div ref={(node) => refCallback(node)}>{count}</div>
    </>
  );
}
