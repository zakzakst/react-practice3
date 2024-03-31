"use client";
import useTodo from "@/hooks/useTodos";

export default function Page() {
  const { state, getOverview, todosNotDoneSelector } = useTodo();

  // const todoOverviews = [...todosNotDoneSelector].map((todo) => )

  return (
    <>
      <p>recoil test</p>
      <p>{JSON.stringify(state)}</p>
    </>
  );
}
