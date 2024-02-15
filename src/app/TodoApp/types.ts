export type TodoItemTypes = {
  id: number;
  todo: string;
  description: string;
  completed: number;
  createdDate: string;
  userId: number;
};

export type FilterParams = {
  keyword?: string;
};

export type State = {
  params: FilterParams;
  modalTodo?: boolean;
  form?: Partial<TodoItemTypes>;
  isLoad?: boolean;
};

export type Action = {
  setParams: (filter: Partial<FilterParams>) => void;
  setModalTodo: (open?: boolean, form?: Partial<TodoItemTypes>) => void;
  setIsLoad: (load?: boolean) => void;
  setForm: (form?: Partial<TodoItemTypes>) => void;
  clearAll: () => void;
};
