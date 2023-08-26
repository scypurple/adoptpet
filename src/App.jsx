import SearchParams from "./components/SearchParams";
import DetailsWithErrorBoundary from "./components/Details";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// eslint-disable-next-line import/named
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});
const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Routes>
          <Route path="/" element={<SearchParams />} />
          <Route path="/details/:id" element={<DetailsWithErrorBoundary />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
};
export default App;
