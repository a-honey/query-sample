import {
  QueryClientProvider,
  QueryClient,
  QueryCache,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RecoilRoot } from "recoil";
import Router from "./Router";

const queryClient = new QueryClient({
  //  API 또는 다른 소스에서 데이터를 관리하고 가져오는 데 사용
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // 창이 다시 포커스되었을때, 쿼리 자동으로 가져오는지
      refetchOnMount: false, // 컴포넌트 마운트될 때, 쿼리를 자동으로 다시 가져오는지
      retry: false, // 실패한 쿼리 자동으로 재시도하는지  // 일정 횟수 지정 가능
    },
  },
  queryCache: new QueryCache({
    // 쿼리 결과를 캐시하고 쿼리 관련 이벤트를 처리하는 역할
    onError: (error, query) => {
      // 쿼리 중 오류가 발생했을 때 어떻게 처리할지 설정
      if (query.meta.errorMessage) {
        // 쿼리에 meta.errorMessage 속성있는지 확인 후 출력
        console.log(query.meta.errorMessage);
      }
    },
  }),
});

function App() {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Router />
        {/* react-query 개발자 도구 */}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;
