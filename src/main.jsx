import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Career from "./pages/career/Home";
import Company from "./pages/career/Company";
import { CompaniesList } from "./data/companies";
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
          {CompaniesList.map((company) => (
            <Route
              key={company}
              path={company}
              element={<Company companyName={company.toLowerCase()} />}
            />
          ))}
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
