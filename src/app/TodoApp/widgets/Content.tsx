import { useGetTodos } from "../queries";
import useTodoStore from "../store";
import { Button, Input } from "@waizly/components";
import Loader from "../components/Loader";
import FormModal from "../components/FormModal";
import Todos from "./Todos";
import NoData from "../components/NoData";

const Content = () => {
  const { data: todos, isFetching } = useGetTodos();
  const { params, setParams, isLoad, setModalTodo } = useTodoStore();

  return (
    <>
      <div className="m-auto flex h-[520px] w-full max-w-80 flex-col gap-4">
        <Input
          value={params.keyword}
          onChange={(e) => setParams({ keyword: e.target.value })}
          placeholder="Search by keyword..."
        />
        <div className="relative flex h-0 w-full flex-1 flex-col overflow-hidden rounded-md bg-white shadow-lg">
          <Loader show={isFetching || isLoad} />
          <Todos todos={todos || []} />

          <NoData show={!isFetching && !todos?.length} />
        </div>
        <Button onClick={() => setModalTodo(true)}>Create Todo</Button>
      </div>
      <FormModal />
    </>
  );
};

export default Content;
