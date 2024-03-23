"use client";

import type { MockTest } from "@/models/mock-test";
import { useEffect, useState } from "react";

export default function TestApi() {
  const [apiData, setApiData] = useState<MockTest>({ id: "" });

  const getMockTest = async () => {
    // const res = await fetch("/api/mock/test?id=1");
    const res = await fetch("/api/mock/test/2");
    const data = (await res.json()) as MockTest;
    setApiData(data);
  };

  useEffect(() => {
    getMockTest();
  }, []);

  return <div>test api {JSON.stringify(apiData)}</div>;
}
