import { create } from "zustand";
import { State, Action, TodoItemTypes } from "./types";
import { format } from "date-fns";

const intiailForm: Partial<TodoItemTypes> = {
  todo: "",
  description: "",
  completed: 0,
  createdDate: format(new Date(), "yyyy-MM-dd"),
};

const initialFilter: State = {
  params: {
    keyword: "",
  },
  modalTodo: false,
  form: intiailForm,
  isLoad: false,
};

const useTodoStore = create<State & Action>()((set) => ({
  ...initialFilter,
  setParams: (params) =>
    set((state) => ({
      params: { ...state.params, ...params },
    })),
  setForm: (form) =>
    set((state) => ({
      form: { ...state.form, ...form },
    })),
  setIsLoad: (isLoad) => set({ isLoad }),
  setModalTodo: (modalTodo, form) =>
    set({ modalTodo, form: form || intiailForm }),

  clearAll: () => set(initialFilter),
}));

export default useTodoStore;
