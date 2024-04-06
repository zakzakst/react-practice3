"use client";
import { useEffect, useState, useRef, useCallback } from "react";
// import useRefCallBack from "@/hooks/useRefCallback";

const sleep = async (delay: number) => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, delay);
  });
};

export default function Page() {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(0);
  // const { node, updateNode } = useRefCallBack<HTMLDivElement>();

  // useEffect(() => {
  //   console.log("hook", node);
  // }, [node]);
  // const element = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   console.log(element.current);
  //   if (element.current) {
  //     console.log(element.current.clientHeight, count);
  //   }
  // }, [element.current]);

  const callBackRef = (node: HTMLDivElement | null) => {
    if (node) console.log("callBackRef", node.clientHeight);
  };

  const callBackRef2 = useCallback((node: HTMLDivElement | null) => {
    if (node) console.log("callBackRef2", node.clientHeight);
  }, []);

  const countUp = async () => {
    await sleep(2000);
    // console.log("count up", element.current);
    setCount(count + 1);
  };

  return (
    <>
      <h1>Test Ref</h1>
      <button onClick={() => countUp()}>カウントアップ：{count}</button>
      <button onClick={() => setOther(other + 1)}>他：{other}</button>
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
      <div ref={(node) => callBackRef(node)}>{count}</div>
      <div>
        <div ref={(node) => callBackRef2(node)}>{count}</div>
      </div>
      {/* <div ref={(node) => updateNode(node)}>hook {count}</div> */}
    </>
  );
}
