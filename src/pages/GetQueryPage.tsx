import useGetTodo from "../hooks/queries/useGetTodo";
import { useState } from "react";

/**
 *
 * @returns isSuccess, isLoading에 대한 잘못된 오해 바로잡기.
 */
export default function GetQueryPage() {
  const [count, setCount] = useState(1);
  const {
    data,
    isSuccess,
    isLoading,
    isRefetching,
    isFetching,
    isError,
    refetch,
  } = useGetTodo({
    todoId: count,
  });

  // isSuccess: 해당 쿼리키가 캐시 데이터를 가지고 있느냐, 해당 쿼리키가 호출된 적이 있나? 만료전에 호출되면 이미 true
  // isLoading: 캐시 데이터가 없고, 최초 캐시 데이터를 받아오는 중인가
  // isFetching: api가 호출되고 있는 중인가(pending)

  const handleCount = ({ vector }: { vector: "PLUS" | "MINUS" }) => {
    setCount((prev) => prev + 1 * (vector === "PLUS" ? 1 : -1));
  };

  const isGetTodoFetched = !isFetching && !isError;

  return (
    <div>
      <div>안뇽? {count} 번 호출이야!</div>
      <div style={{ fontSize: "60px" }}>
        <div>isSuccess :: {JSON.stringify(isSuccess)}</div>
        <div>isLoading :: {JSON.stringify(isLoading)}</div>
        <div>isFetching :: {JSON.stringify(isFetching)}</div>
        <div>isRefetching :: {JSON.stringify(isRefetching)}</div>
      </div>
      <button onClick={() => handleCount({ vector: "PLUS" })}>더하기!</button>
      <button onClick={() => handleCount({ vector: "MINUS" })}>빼기!</button>
      <button
        onClick={() => {
          refetch();
        }}
      >
        refetch!
      </button>
      <div>{data ? "데이터가 있어요!" : "데이터가 없어요!"}</div>
      <div>{isGetTodoFetched ? "호출 성공!" : "호출 중이거나 호출 오류"}</div>
      <div>{isFetching ? "호출 중..." : "호출 완료"}</div>
      <div>{isError ? "호출 오류" : "페치 모니터링..."}</div>
    </div>
  );
}
