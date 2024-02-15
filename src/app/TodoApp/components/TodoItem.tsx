import { motion } from "framer-motion";
import { TodoItemTypes } from "../types";
import { format } from "date-fns";
import { Divider, IconButton } from "@waizly/components";
import { BsPencil, BsTrash, BsCheckCircleFill, BsCircle } from "react-icons/bs";

interface ITodoItem extends TodoItemTypes {
  onUpdate?: (todo: TodoItemTypes) => void;
  onDelete?: (todo: number) => void;
  onComplete?: (todo: TodoItemTypes) => void;
}

const TodoItem = ({
  onComplete,
  onUpdate,
  onDelete,
  ...todoItem
}: ITodoItem) => {
  const { id, todo, description, createdDate, completed } = todoItem;

  return (
    <motion.div
      initial={{
        height: 0,
        opacity: 0,
      }}
      animate={{
        height: "auto",
        opacity: 1,
        transition: {
          opacity: {
            delay: 0.025 * 4,
          },
        },
      }}
      exit={{ height: 0, opacity: 0 }}
      transition={{
        duration: 0.15 * 4,
        opacity: {
          delay: 0.03 * 4,
        },
      }}
      className="relative rounded-lg bg-white px-4 py-2 shadow-md"
    >
      <div
        className={`absolute left-0 top-0 h-full w-1 rounded-l-lg ${completed === 1 ? "bg-green-600" : "bg-blue-400"}`}
      />
      <div className="flex flex-col gap-4 py-2">
        <div className="flex items-center justify-between gap-4 text-sm font-bold">
          <span>{todo}</span>
          <div className="flex gap-2">
            <IconButton onClick={() => onUpdate?.(todoItem)}>
              <BsPencil />
            </IconButton>
            <IconButton onClick={() => onDelete?.(id)}>
              <BsTrash />
            </IconButton>
            <IconButton onClick={() => onComplete?.(todoItem)}>
              {completed === 1 ? (
                <BsCheckCircleFill className="text-green-600" />
              ) : (
                <BsCircle className="text-blue-400" />
              )}
            </IconButton>
          </div>
        </div>
        <div className="text-sm">{description}</div>
      </div>
      <Divider className="-mx-4" />
      <div className="py-2 text-sm">{format(createdDate, "dd MMMM yyyy")}</div>
    </motion.div>
  );
};

export default TodoItem;
