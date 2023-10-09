import { useQuery } from "@tanstack/react-query";
import { getUserInfo } from "../../api/apis";

export default function useGetUserInfo({ userId }: { userId: number }) {
  return useQuery(["useGetUserInfo", userId], () => getUserInfo({ userId }), {
    enabled: true,
    select: (data) => data,
    meta: {
      errorMessage: `useGetUserInfo ${userId}번 호출에서 오류가 발생했습니다.`,
    },
  });
}
