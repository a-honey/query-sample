import useGetTodos from "../hooks/queries/useGetTodos";

export default function InfiniteQueryPage() {
  const {
    data,
    fetchNextPage,
    fetchPreviousPage,
    hasNextPage,
    hasPreviousPage,
  } = useGetTodos();
  console.log(data);
  return (
    <div>
      <div style={{ fontSize: "48px" }}>
        <div>
          다음 페이지가 호출 가능한가요? : {JSON.stringify(hasNextPage)}
        </div>
        <div>
          이전 페이지가 호출 가능한가요? : {JSON.stringify(hasPreviousPage)}
        </div>
      </div>
      <button onClick={() => fetchNextPage()} disabled={!hasNextPage}>
        다음 API 호출하기
      </button>
      <button onClick={() => fetchPreviousPage()} disabled={!hasPreviousPage}>
        이전 API 호출하기
      </button>
    </div>
  );
}
