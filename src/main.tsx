import React from "react";
import ReactDOM from "react-dom/client";
import AppLoader from "@/AppLoader";
import { AppStateProvider } from "@/AppStateContext";
import "@/styles/styles.scss";

const root = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <AppStateProvider>
      <AppLoader />
    </AppStateProvider>
  </React.StrictMode>
);
