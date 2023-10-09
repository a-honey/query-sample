import { useInfiniteQuery } from "@tanstack/react-query";
import { getTodo } from "../../api/apis";

export default function useGetTodos() {
  return useInfiniteQuery(
    ["useGetTodosInfinite"],
    ({ pageParam = 1 }) => getTodo({ todoId: pageParam }),
    {
      getNextPageParam: (lastPage) => lastPage.id < 10 && lastPage.id + 1,
      getPreviousPageParam: (firstPage) => firstPage.id > 0 && firstPage.id - 1,
      select: (data) => {
        return data;
      },
    }
  );
}
