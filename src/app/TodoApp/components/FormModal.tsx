import { Button, Dialog, Input, Textarea } from "@waizly/components";
import { useMutateCreate, useMutateUpdate } from "../queries";
import useTodoStore from "../store";

const FormModal = () => {
  const { mutate: onCreate } = useMutateCreate();
  const { mutate: onUpdate } = useMutateUpdate();
  const { modalTodo, setModalTodo, form, setForm } = useTodoStore();

  return (
    <Dialog
      title="Create Todo"
      show={modalTodo}
      onClose={() => setModalTodo(false)}
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <Input
            label="Todo"
            id="todo"
            value={form?.todo}
            onChange={(event) => setForm({ todo: event.target.value })}
          />
          <Textarea
            label="Description"
            id="description"
            value={form?.description}
            onChange={(event) => setForm({ description: event.target.value })}
          />
        </div>
        <div className="flex justify-end gap-2">
          <Button
            className="bg-gray-200 !text-black hover:bg-gray-300"
            onClick={() => setModalTodo(false)}
          >
            Cancel
          </Button>
          <Button onClick={() => (form?.id ? onUpdate(form) : onCreate(form))}>
            Create
          </Button>
        </div>
      </div>
    </Dialog>
  );
};

export default FormModal;
