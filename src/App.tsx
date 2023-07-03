import "./App.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Header from "./components/Header";
import UsersContainer from "./components/UsersProvider";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <UsersContainer />
    </QueryClientProvider>
  );
}

export default App;
