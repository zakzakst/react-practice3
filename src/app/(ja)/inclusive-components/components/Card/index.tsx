// 参考：https://inclusive-components.design/cards/
"use client";
import { useRef, MouseEvent } from "react";
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

  // TODO: useStateでdownとup保持してhandleClickをmousedown,mouseupに変える

  const linkRef = useRef<HTMLAnchorElement>(null);
  const handleClick = (e: MouseEvent) => {
    if (!linkRef.current || linkRef.current === e.target) return;
    console.log("click");
    linkRef.current.click();
  };

  return (
    <li className={style.item} onClick={handleClick}>
      <div className={style.body}>
        <h2>
          <a href={link}>{title}</a>
        </h2>
        <p>{description}</p>
        <small>
          By{" "}
          <a href={authorLink} ref={linkRef}>
            {author}
          </a>
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
    link: "#",
    title: item.title,
    description: item.description,
    author: item.author,
    authorLink: "#",
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
