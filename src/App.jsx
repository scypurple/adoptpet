import { useState } from "react";
import AdoptPetContext from "./components/AdoptPetContext";
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
  const adoptPetHook = useState(null);
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AdoptPetContext.Provider value={adoptPetHook}>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Routes>
            <Route path="/" element={<SearchParams />} />
            <Route path="/details/:id" element={<DetailsWithErrorBoundary />} />
          </Routes>
        </AdoptPetContext.Provider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};
export default App;
