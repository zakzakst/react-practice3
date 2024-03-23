"use client";

import type { MockBlogs } from "@/models/mock-blog";
import { useEffect, useState } from "react";

export default function Page() {
  const [isFetched, setIsFetched] = useState(false);
  const [apiData, setApiData] = useState<MockBlogs>({ total: 0, items: [] });

  const getMockBlogs = async () => {
    const res = await fetch("/api/mock/blog");
    const data = (await res.json()) as MockBlogs;
    setApiData(data);
    setIsFetched(true);
  };

  useEffect(() => {
    getMockBlogs();
  }, []);

  return (
    <>
      {!isFetched ? (
        <div>記事一覧を取得しています。</div>
      ) : apiData.items.length ? (
        <>
          <p>記事数：{apiData.total}件</p>
          <ul>
            {apiData.items.map((item) => (
              <li key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p>
                  <a href={`/blog/${item.id}`}>リンク</a>
                </p>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>記事が見つかりませんでした。</p>
      )}
    </>
  );
}

// nextのサーバーからAPIデータを取得しようとしたがエラー（nextが立ち上がってないから？）
// import type { MockBlogs } from "@/models/mock-blog";

// export default async function Page() {
//   const res = await fetch("/api/mock/blog");
//   const data = (await res.json()) as MockBlogs;

//   return (
//     <div>
//       {data.items.length ? (
//         <>
//           <p>記事数：{data.total}件</p>
//           <ul>
//             {data.items.map((item) => (
//               <li key={item.id}>
//                 <h3>{item.title}</h3>
//                 <p>{item.description}</p>
//               </li>
//             ))}
//           </ul>
//         </>
//       ) : (
//         <p>記事が見つかりませんでした。</p>
//       )}
//     </div>
//   );
// }
