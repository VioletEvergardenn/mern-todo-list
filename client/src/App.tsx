import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import NewNote from "./pages/NewNote";

const App: React.FC = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route index element={<Navigate to={"/home"} replace={true} />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/new" element={<NewNote />} />
      </Routes>
    </QueryClientProvider>
  );
};

export default App;
