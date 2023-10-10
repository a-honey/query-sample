import { useState } from "react";
import {
  useGetInitCalling,
  useGetMapQueries,
} from "../hooks/queries/useGetInitCalling";

import useGetTodo from "../hooks/queries/useGetTodo";
import useGetUserInfo from "../hooks/queries/useGetUserInfo";

export default function GetQueriesPage() {
  const [count] = useState(1);

  // getTodo, getUserInfo가 비동기적으로 선언되는 일반적인 용례입니다.
  const { data: todoData } = useGetTodo({ todoId: count });
  const { data: userInfoData } = useGetUserInfo({ userId: count });

  // 아래는 getTodo, getUserInfo를 useQueries로 묶어내어 각각의 useQuery로서 기능하도록 해둔 용례입니다.

  // const [
  //   {
  //     data: res1Data,
  //     isSuccess: res1Success,
  //     isLoading: res1Loading,
  //     isFetching: res1Fetching,
  //     isError: res1Error,
  //   },
  //   {
  //     data: res2Data,
  //     isSuccess: res2Success,
  //     isLoading: res2Loading,
  //     isFetching: res2Fetching,
  //     isError: res2Error,
  //   },
  // ] = useGetInitCalling({ id: 1 });

  // 아래는 useQueries를 활용하는 또 다른 방식의 예시입니다. 실제 코드를 열어보시면 됩니다.

  //   const res = useGetMapQueries({ dependArray: [1, 2, 3, 4, 5] });

  return <></>;
}
