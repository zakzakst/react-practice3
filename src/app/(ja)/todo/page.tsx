type MockTodo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export default async function Page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = (await res.json()) as MockTodo[];

  return (
    <div>
      {data.length ? (
        <>
          <p>課題数：{data.length}件</p>
          <ul>
            {data.map((item) => (
              <li key={item.id}>
                <p>
                  <span>{item.completed ? "〇" : "×"}</span>
                  <a href={`/todo/${item.id}`}>{item.title}</a>
                </p>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>課題が見つかりませんでした。</p>
      )}
    </div>
  );
}
