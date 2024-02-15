import { useEffect } from "react";
import { Layout } from "@waizly/layout";
import { TodoContent, useTodoStore } from "@waizly/app/TodoApp";

const Todo = () => {
  const { clearAll } = useTodoStore();

  useEffect(() => {
    return clearAll;
  }, [clearAll]);

  return (
    <Layout className="items-center py-6">
      <TodoContent />
    </Layout>
  );
};

export default Todo;
