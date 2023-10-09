import { useQueries } from "@tanstack/react-query";
import { getTodo, getUserInfo } from "../../api/apis";

export function useGetInitCalling({ id }: { id: number }) {
  return useQueries({
    queries: [
      { queryKey: ["useGetTodo", id], queryFn: () => getTodo({ todoId: id }) },
      {
        queryKey: ["useGetUserInfo", id],
        queryFn: () => getUserInfo({ userId: id }),
      },
    ],
  });
}

export function useGetMapQueries({ dependArray }: { dependArray: number[] }) {
  return useQueries({
    queries: dependArray.map((i) => ({
      queryKey: ["useGetUserInfo", i],
      queryFn: () => getUserInfo({ userId: i }),
      enabled: !!dependArray,
    })),
  });
}
