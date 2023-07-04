import "./App.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Header from "./components/navigation/Header";
import UsersContainer from "./components/users/UsersProvider";

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
