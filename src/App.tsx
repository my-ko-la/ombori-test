import "./App.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Header from "./components/Header";
import UsersProvider from "./components/UsersProvider";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <UsersProvider />
    </QueryClientProvider>
  );
}

export default App;
