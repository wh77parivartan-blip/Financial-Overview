import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Ensure hash-based routing is initialized
if (!window.location.hash) {
  window.location.hash = "/";
}

createRoot(document.getElementById("root")!).render(<App />);
