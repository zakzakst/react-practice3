"use client";
import useTodo from "@/hooks/useTodos";

export default function List() {
  const { notDoneState, setTodoDone } = useTodo();

  const setDone = (id: number) => {
    setTodoDone(id, true);
  };

  return (
    <ul>
      {notDoneState.map((todo) => (
        <li key={todo.id}>
          {todo.title}{" "}
          <button onClick={() => setDone(todo.id)}>完了にする</button>
        </li>
      ))}
    </ul>
  );
}
