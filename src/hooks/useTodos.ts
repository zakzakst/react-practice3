import { useRecoilValue, useSetRecoilState, SetterOrUpdater } from "recoil";
import { Todo, todosAtom, todosNotDoneSelector } from "@/states/todos";

export default function useTodo() {
  // todosの値を取得
  const state: Todo[] = useRecoilValue(todosAtom);

  // todosを更新
  const update: SetterOrUpdater<Todo[]> = useSetRecoilState(todosAtom);

  // 指定したtodoの完了状態を変更する
  const setTodoDone = (id: number, isDone: boolean) => {
    const newTodos = [...state];
    const targetTodo = newTodos.find((todo) => todo.id === id);
    if (!targetTodo) return;

    const targetIndex = newTodos.indexOf(targetTodo);

    const updatedTodo = {
      ...targetTodo,
      done: isDone,
    };

    newTodos[targetIndex] = updatedTodo;
    update(newTodos);
  };

  // 未完了のtodosの値を取得
  const notDoneState: Todo[] = useRecoilValue(todosNotDoneSelector);

  // todoの概要文を取得
  const getOverview = (todo: Todo): string => {
    return `【TODO${todo.id}】${todo.title}（${todo.done ? "完了" : "未完了"}）`;
  };

  return {
    state,
    update,
    getOverview,
    notDoneState,
    setTodoDone,
  };
}
