"use client";
import useTodo from "@/hooks/useTodos";
import List from "./list";

export default function Page() {
  const { state, getOverview, notDoneState } = useTodo();

  const notDoneOverviews = [...notDoneState].map((todo) => getOverview(todo));

  return (
    <>
      <p>recoil test</p>
      <p>{JSON.stringify(state)}</p>
      <p>{JSON.stringify(notDoneOverviews)}</p>
      <List />
    </>
  );
}
