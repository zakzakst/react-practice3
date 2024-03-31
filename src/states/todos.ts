import { atom, selector } from "recoil";

export type Todo = {
  id: number;
  title: string;
  done: boolean;
};

const sampleTodo: Todo = {
  id: 1,
  title: "ごみ捨て",
  done: false,
};

export const todosAtom = atom<Todo[]>({
  key: "todos",
  default: [sampleTodo],
});

export const todosNotDoneSelector = selector({
  key: "todosNotDoneSelector",
  get: ({ get }) => {
    const todos = get(todosAtom);
    const result = todos.filter((e) => {
      return !e.done;
    });
    return result;
  },
});
