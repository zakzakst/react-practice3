import { GetStaticPaths, GetStaticProps } from "next";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  const paths = posts.map((post: Post) => ({
    // このkey名をファイル名の[]のなかの文字列と一致させる
    params: { id: String(post.id) },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params?.id}`
  );
  const post = await res.json();
  return { props: { post } };
};

export default function Page({ post }: { post: Post }) {
  return <div>test {JSON.stringify(post)}</div>;
}
