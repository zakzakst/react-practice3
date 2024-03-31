import { atom, selector } from "recoil";

export type Todo = {
  id: number;
  title: string;
  done: boolean;
};

const sampleTodos: Todo[] = [
  {
    id: 1,
    title: "ごみ捨て",
    done: false,
  },
  {
    id: 2,
    title: "ごみ出し",
    done: false,
  },
  {
    id: 3,
    title: "買い物",
    done: true,
  },
];

export const todosAtom = atom<Todo[]>({
  key: "todos",
  default: sampleTodos,
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
