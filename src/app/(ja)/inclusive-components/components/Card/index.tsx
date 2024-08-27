// 参考：https://inclusive-components.design/cards/
"use client";
import { useEffect, useRef, MouseEvent } from "react";
import { card as style } from "./styles.css";

type CardProps = {
  link: string;
  title: string;
  description: string | JSX.Element;
  author: string;
  authorLink: string;
  thumbnail: string;
  thumbnailAlt: string;
};

// TODO: この変数の記述上手くできないか調べる
let down: number = 0;
let up: number = 0;

const Item = (props: CardProps) => {
  const {
    link,
    title,
    description,
    author,
    authorLink,
    thumbnail,
    thumbnailAlt,
  } = props;

  const cardRef = useRef<HTMLLIElement>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;
    // JavaScriptが失敗すると、スタイルが誤解を招くため、JavaScriptでスタイルを追加
    cardRef.current.style.cursor = "pointer";
  }, []);

  const handleMouseDown = (e: MouseEvent) => {
    down = +new Date();
  };

  const handleMouseUp = (e: MouseEvent) => {
    up = +new Date();
    if (up - down < 200) return;

    // tagName プロパティは HTMLElement 型に存在するので、e.target を HTMLElement 型にキャストしてから tagName を参照する必要があります。
    // e.target が HTMLElement のインスタンスであるかどうかを確認し、そうであれば tagName を参照するようにしています。これにより、型の不一致によるエラーが解消されます。
    if (
      !linkRef.current ||
      !(e.target instanceof HTMLElement) ||
      e.target.tagName === "a"
    )
      return;
    linkRef.current.click();
  };

  return (
    <li
      className={style.item}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      ref={cardRef}
    >
      <div className={style.body}>
        <h2>
          <a href={link} ref={linkRef}>
            {title}
          </a>
        </h2>
        <p>{description}</p>
        <small>
          By <a href={authorLink}>{author}</a>
        </small>
      </div>
      <div className={style.thumbContainer}>
        <picture className={style.thumbPicture}>
          <img
            className={style.thumbImg}
            src={thumbnail}
            alt={thumbnailAlt}
            width={800}
            height={500}
            loading="lazy"
          />
        </picture>
      </div>
    </li>
  );
};

const dummyItems = [
  {
    title: "2024年ウェブデザインのトレンド",
    description:
      "今年のウェブデザインのトレンドは、よりシンプルでユーザー体験を重視したものになっています。具体的な例やヒントを紹介します。",
    author: "山田 太郎",
    thumbnailId: 200,
  },
  {
    title: "JavaScriptの最新機能解説",
    description:
      "ES2024で追加された新しいJavaScript機能を徹底解説します。これからの開発にどう活かせるか、実践例も交えて説明します。",
    author: "佐藤 花子",
    thumbnailId: 200,
  },
  {
    title: "SEO対策の基本と最新のテクニック",
    description:
      "検索エンジン最適化（SEO）の基本を理解し、最新のアルゴリズム変更に対応するためのテクニックを学びましょう。",
    author: "鈴木 一郎",
    thumbnailId: 200,
  },
  {
    title: "Reactを使ったコンポーネント設計のベストプラクティス",
    description:
      "Reactで再利用可能なコンポーネントを設計するためのベストプラクティスを紹介します。コードの保守性と拡張性を高めるためのヒントも満載です。",
    author: "田中 実",
    thumbnailId: 200,
  },
  {
    title: "アプリケーションパフォーマンスの最適化",
    description:
      "フロントエンドとバックエンドの両面からアプリケーションのパフォーマンスを最適化する方法を解説します。実際のプロジェクトで役立つ実践的なアドバイスも含めています。",
    author: "高橋 玲子",
    thumbnailId: 200,
  },
  {
    title: "UXデザインの基本と応用",
    description:
      "ユーザーエクスペリエンス（UX）デザインの基本概念から、実際に役立つ応用技術まで幅広くカバーします。成功するプロダクトを作るための鍵となる要素を探ります。",
    author: "中村 和也",
    thumbnailId: 200,
  },
];

export const Items = () => {
  const items: CardProps[] = dummyItems.map((item) => ({
    link: "#link",
    title: item.title,
    description: item.description,
    author: item.author,
    authorLink: "#author",
    thumbnail: `https://picsum.photos/id/${item.thumbnailId}/200/300`,
    thumbnailAlt: "",
  }));

  return (
    <ul className={style.items}>
      {items.map((item, index) => (
        <Item {...item} key={index} />
      ))}
    </ul>
  );
};
