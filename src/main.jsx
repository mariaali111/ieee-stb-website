import { createRoot } from "react-dom/client";

import "./styles.css";
import App from "./App";
import AppErrorBoundary from "./components/AppErrorBoundary";

createRoot(document.getElementById("root")).render(
  <AppErrorBoundary>
    <App />
  </AppErrorBoundary>
);
