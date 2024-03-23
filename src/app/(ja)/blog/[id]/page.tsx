"use client";

import type { MockBlogDetail } from "@/models/mock-blog";
import { useEffect, useState } from "react";

type Props = {
  params: {
    id: string;
  };
};

export default function Page({ params }: Props) {
  const [isFetched, setIsFetched] = useState(false);
  const [apiData, setApiData] = useState<MockBlogDetail | null>(null);

  const getMockBlog = async () => {
    const res = await fetch(`/api/mock/blog/${params.id}`);
    const data = (await res.json()) as MockBlogDetail;
    setApiData(data);
    setIsFetched(true);
  };

  useEffect(() => {
    getMockBlog();
  }, []);

  return (
    <>
      {!isFetched ? (
        <div>記事を取得しています。</div>
      ) : apiData ? (
        <>
          <h1>{apiData.title}</h1>
          <p>{apiData.description}</p>
          <div
            dangerouslySetInnerHTML={{
              __html: apiData.content,
            }}
          />
        </>
      ) : (
        <div>記事の取得に失敗しました。</div>
      )}
    </>
  );
}
