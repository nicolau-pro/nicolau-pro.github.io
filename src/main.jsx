import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Career from "./pages/career/Home";
import Blippar from "./pages/career/Blippar";
import MRMC from "./pages/career/MRMC";
import "./styles/styles.scss";

const root = document.getElementById("root");
const rootPath = "/"; //root.getAttribute("data-root-path") || "/r5-deploy/";

// https://reactrouter.com/start/declarative/routing

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path={rootPath} element={<Dashboard />}>
        <Route index element={<Home />} />
        <Route path="career">
          <Route index element={<Career />} />
          <Route path="blippar" element={<Blippar />} />
          <Route path="mrmc" element={<MRMC />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
