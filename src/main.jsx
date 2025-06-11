import React from "react";
import ReactDOM from "react-dom/client";
import AppLoader from "./AppLoader";
import { AppStateProvider } from "./AppStateContext";
import "./styles/styles.scss";

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <AppStateProvider>
      <AppLoader />
    </AppStateProvider>
  </React.StrictMode>
);
