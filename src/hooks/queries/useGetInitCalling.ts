import { useQueries } from "@tanstack/react-query";
import { getTodo, getUserInfo } from "../../api/apis";

export function useGetInitCalling({ id }: { id: number }) {
  return useQueries({
    // 여러 개의 쿼리를 한 번에 실행하고 관리(병렬 실행)
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
      queryKey: ["useGetUserInfo", i], // userId를 배열로 받아서 정보를 저장
      queryFn: () => getUserInfo({ userId: i }),
      enabled: !!dependArray,
    })),
  });
}
