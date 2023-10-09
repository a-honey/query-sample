import { BrowserRouter, Route, Routes } from "react-router-dom";
import GetQueryPage from "./pages/GetQueryPage";
import GetQueriesPage from "./pages/GetQueriesPage";
import MutationPage from "./pages/MutationPage";
import InfiniteQueryPage from "./pages/InfiniteQueryPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GetQueryPage />} />
        <Route path="/2" element={<GetQueriesPage />} />
        <Route path="/3" element={<MutationPage />} />
        <Route path="/4" element={<InfiniteQueryPage />} />
      </Routes>
    </BrowserRouter>
  );
}
