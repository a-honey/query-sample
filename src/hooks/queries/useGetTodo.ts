import { useQuery } from "@tanstack/react-query";
import { getTodo } from "../../api/apis";

export default function useGetTodo({ todoId }: { todoId: number }) {
  return useQuery(["useGetTodo", todoId], () => getTodo({ todoId }), {
    // 호출 조건. 기본 값 true.
    enabled: true,
    // 데이터 가공해주기. 여기서 가공해준대로 useQuery의 data값이 변형되서 나간다. 기본 값 data.
    select: (data) => data,
    // 재시도 플래그. 기본 값 true
    retry: false,
    // 다시 페이지에 돌아왔을 때 다시 호출할지에 대한 여부. 기본 값 true
    refetchOnWindowFocus: false,
    // 쿼리키가 변경되었을 때, 이전 쿼리키의 값을 유지할 것인가?에 대한 여부. 기본 값 false
    keepPreviousData: false,
    // 캐시된 값을 사용하는 것이 아닌, 네트워크 호출을 통해 서버로부터 데이터를 가져올 것인가? 에 대한 타이밍. 기본 값 0
    staleTime: 0,
    // 캐시된 값을 얼마나 보존시킬 것인가? 에 대한 플래그. 기본값은 5분.
    cacheTime: 0,
    meta: {
      errorMessage: `useGetTodo ${todoId}번 호출에서 오류가 발생했습니다.`,
    },
  });
}
