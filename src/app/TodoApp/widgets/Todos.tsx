import { AnimatePresence } from "framer-motion";
import TodoItem from "../components/TodoItem";
import { useMutateDelete, useMutateUpdate } from "../queries";
import useTodoStore from "../store";
import { TodoItemTypes } from "../types";

interface ITodos {
  todos: TodoItemTypes[];
}

const Todos = ({ todos }: ITodos) => {
  const { mutate: onDelete } = useMutateDelete();
  const { mutate: onUpdate } = useMutateUpdate();
  const { setModalTodo } = useTodoStore();
  return (
    <div className="flex w-full flex-col gap-4 overflow-auto p-4">
      <AnimatePresence initial={false}>
        {todos.map((item) => (
          <TodoItem
            key={item.id}
            {...item}
            onUpdate={(todo) => setModalTodo(true, todo)}
            onDelete={(todoId) => onDelete(todoId)}
            onComplete={(todo) =>
              onUpdate({ ...todo, completed: todo.completed ? 0 : 1 })
            }
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Todos;
