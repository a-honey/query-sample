import usePostTodo from "../hooks/mutations/usePostTodo";

const MOCK_MUTATE_OBJECT = {
  id: 1,
  msg: "1",
};

export default function MutationPage() {
  const {
    mutate,
    mutateAsync,
    data,
    error,
    isError,
    isIdle,
    isLoading,
    isSuccess,
    status,
  } = usePostTodo();

  const handleMutation = () => {
    mutate(
      // 캐시된 데이터를 업데이트하고 비동기 작업을 실행
      { body: MOCK_MUTATE_OBJECT },
      {
        onSuccess: (res) => {
          console.log("success!");
          console.log(res);
        },
        onError: (err) => {
          console.log("catch!");
        },
        onSettled: () => {
          console.log("finally!");
        },
      }
    );

    mutateAsync(
      // 더 많은 제어와 오류 처리 필요시
      { body: MOCK_MUTATE_OBJECT },
      {
        onSuccess: (res) => {
          console.log("success!");
          console.log(res);
        },
        onError: (err) => {
          console.log("catch!");
        },
        onSettled: () => {
          console.log("finally!");
        },
      }
    );

    // useMutation에 쓰이는 Mutation Observer라는 친구는 class로 캡슐화되어있으며
    // mutate가 호출될 때마다 기존에 구독된 옵저버가 있다면 초기화하는 로직이 상단에 붙어있다.
    // 따라서, 각 mutate가 이전의 mutate를 해제해버리면서 맨 마지막에 있는 mutate만 되는 것으로 추정된다. 코드의 실행이 비동기적으로 진행되기 때문일 것으로 생각되는데, 확실하진 않다.
    // Promise 동작을 수행할 텐데, 왜 async/await가 되지 않느냐에 대한 까닭은.
    // 개발자가 mutate를 선언했을 때, 내부에서 Promise 객체로서 기능하는 observer.mutate가 호출하게끔 코딩되어있다.
    // 즉, 우리는 우리가 제어권을 가지고 함수를 호출한게 아니라 대리자에게 호출해달라고 부탁한 꼴이 된다는 거다.

    // mutateAsync는 조금 다른데, MutationObserver가 가지고 있는 옵션의 스냅샷을 생성자로 가지는 class 객체가 할당된 result 변수의 mutate 프로퍼티를 반환한다.
    // 따라서 이 경우는 호출 시점의 상태값을 구독한다고 보면 되고, 그렇다면, mutateAsync는 단독의 scope로서 기능한다고 비유할 수 있다. (확실하지 않아서 이렇게 기록함.)
    // 결정적으로 mutate와 다른 것은. 여긴 아예 Promise 함수 자체를 반환시켜서 함수 호출의 제어권을 개발자로 위임해버린다.
    // 그러므로, 우리가 직접 호출하는 케이스가 되기 때문에 async/await가 가능해진다는거다.
    // async/await 가 가능하다.
    // useSyncExternalStore 활용.
  };

  return (
    <>
      <button onClick={handleMutation}>Call Mutate</button>
    </>
  );
}
