import { useInfiniteQuery } from "@tanstack/react-query";
import { getTodo } from "../../api/apis";

export default function useGetTodos() {
  return useInfiniteQuery(
    ["useGetTodosInfinite"],
    ({ pageParam = 1 }) => getTodo({ todoId: pageParam }), // 초기 페이지 번호 1, 데이터를 가져옴
    {
      getNextPageParam: (lastPage) => lastPage.id < 10 && lastPage.id + 1, // useGetTodosInfinite의 마지막 페이지의 id가 10미만(마지막페이지가 아닌 경우)인 경우 다음 페이지를 가져옴
      select: (data) => {
        return data;
      },
    }
  );
}
