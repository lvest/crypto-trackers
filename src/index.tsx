import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App";
import { ThemeStyleProvider } from "./context/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root")!);
const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeStyleProvider>
        <App />
      </ThemeStyleProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
