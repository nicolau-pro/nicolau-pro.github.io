import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Company from "./pages/career/Company";
import Career from "./pages/career/Career";
import Projects from "./pages/projects/Projects";
import Awards from "./pages/awards/Awards";

const rootPath = "/";

function AppLoader() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/companies")
      .then((res) => res.json())
      .then((data) => setCompanies(data))
      .catch((error) => {
        console.error("Failed to load companies:", error);
      });
  }, []);

  if (!companies) {
    return <div>Loading...</div>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path={rootPath} element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path="career">
            <Route index element={<Career />} />
            {companies.map((company) => (
              <Route
                key={company.id}
                path={company.theme}
                element={<Company companyId={company.id} />}
              />
            ))}
          </Route>
          <Route path="projects">
            <Route index element={<Projects />} />
          </Route>
          <Route path="awards">
            <Route index element={<Awards />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppLoader;
