import mockApi from "@waizly/libs/mockApi";

export const getTodosApi = async (keyword: string = "dolor") => {
  const request = await fetch(
    "https://my-json-server.typicode.com/fitzfitz/typicode/todo",
  );
  const response = await request.json();
  const filtered = response.filter((obj: any) => {
    return obj.description.toLowerCase().includes(keyword?.toLowerCase());
  });
  // return filtered?.length ? filtered : response;
  return filtered;
};

export const createTodoApi = async (payload: any) => {
  return await mockApi({ ...payload }, 2000);
};

export const updateTodoApi = async (payload: any) => {
  return await mockApi({ ...payload }, 1000);
};

export const deleteTodoApi = async (payload: any) => {
  return await mockApi({ id: payload }, 2000);
};
