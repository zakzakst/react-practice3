type MockTodo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

type Props = {
  params: { id: string };
};

export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = (await res.json()) as MockTodo[];

  return data.map((item) => ({
    // number型のまま渡したらエラーになったparamsのプロパティはstringの必要がある？
    id: String(item.id),
  }));
}

export default async function Page({ params }: Props) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${params.id}`
  );
  const data = (await res.json()) as MockTodo;

  return (
    <>
      <h1>課題名：{data.title}</h1>
      <p>ステータス：{data.completed ? "完了" : "未完了"}</p>
      <p>
        <a href="/todo/">一覧に戻る</a>
      </p>
    </>
  );
}
