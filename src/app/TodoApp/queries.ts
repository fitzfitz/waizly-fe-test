import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { TodoItemTypes } from "./types";
import {
  createTodoApi,
  deleteTodoApi,
  getTodosApi,
  updateTodoApi,
} from "./services";
import useTodoStore from "./store";
import useDebounce from "@waizly/libs/useDebounce";

export const useGetTodos = () => {
  const { params } = useTodoStore();
  const debouncedParams = useDebounce(params, 500);
  return useQuery<TodoItemTypes[]>({
    queryKey: ["todos", debouncedParams.keyword],
    queryFn: () => getTodosApi(debouncedParams.keyword),
    placeholderData: (data) => data,
  });
};

export const useMutateCreate = () => {
  const queryClient = useQueryClient();
  const { params, setIsLoad, clearAll } = useTodoStore();
  return useMutation({
    mutationFn: createTodoApi,
    onMutate: () => setIsLoad(true),
    onSuccess: (response) => {
      queryClient.setQueryData(
        ["todos", params.keyword],
        (todos: TodoItemTypes[]) => {
          return [
            {
              ...response,
              id: Math.floor(Math.random() * (1000 - 1) + 1),
            },
            ...todos,
          ];
        },
      );
      clearAll();
    },
    onSettled: () => setIsLoad(false),
  });
};

export const useMutateUpdate = () => {
  const queryClient = useQueryClient();
  const { params, setIsLoad, clearAll } = useTodoStore();
  return useMutation({
    mutationFn: updateTodoApi,
    onMutate: () => setIsLoad(true),
    onSuccess: (response) => {
      queryClient.setQueryData(
        ["todos", params.keyword],
        (todos: TodoItemTypes[]) => {
          return todos?.map((item) =>
            item.id === response.id ? response : item,
          );
        },
      );
      clearAll();
    },
    onSettled: () => setIsLoad(false),
  });
};

export const useMutateDelete = () => {
  const queryClient = useQueryClient();
  const { params, setIsLoad, clearAll } = useTodoStore();
  return useMutation({
    mutationFn: deleteTodoApi,
    onMutate: () => setIsLoad(true),
    onSuccess: (response) => {
      queryClient.setQueryData(
        ["todos", params.keyword],
        (todos: TodoItemTypes[]) => {
          return todos?.filter((item) => item.id !== response.id);
        },
      );
      clearAll();
    },
    onSettled: () => setIsLoad(false),
  });
};
