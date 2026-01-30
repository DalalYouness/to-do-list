import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ToDoWrapper from "./components/ToDoWrapper.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToDoWrapper />
  </StrictMode>,
);
