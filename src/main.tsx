import "./index.css";
import "./api/axios/interceptors";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { ListApp } from "./list-app/ListApp.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ListApp />
    {/* <App /> */}
  </StrictMode>
);
