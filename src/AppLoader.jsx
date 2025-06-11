import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Company from "./pages/career/Company";
import Career from "./pages/career/Career";
import Project from "./pages/projects/Project";
import Projects from "./pages/projects/Projects";
import Awards from "./pages/awards/Awards";
import Contact from "./pages/contact/Contact";
import { API_GetCompanies } from "./data/companies";
import { API_GetProjects, ProjectPath } from "./data/projects";

import { useAppState } from "./AppStateContext";

const rootPath = "/";

function AppLoader() {
  const { setOutletReady } = useAppState();

  const [Companies, setCompanies] = useState(null);
  const [ProjectList, setProjectList] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const companies = await API_GetCompanies();
      setCompanies(companies);

      const projects = await API_GetProjects();
      setProjectList(projects);
    }

    fetchData();
  }, []);

  if (!Companies || !ProjectList) {
    return <div>Loading...</div>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path={rootPath} element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path="career">
            <Route index element={<Career />} />
            {Companies.map((company) => (
              <Route
                key={company.id}
                path={company.theme}
                element={<Company companyId={company.id} />}
              />
            ))}
          </Route>
          <Route path="projects">
            <Route index element={<Projects />} />
            {ProjectList.map((project) => (
              <Route
                key={project.id}
                path={ProjectPath(project)}
                element={<Project projectId={project.id} />}
              />
            ))}
          </Route>
          <Route path="awards">
            <Route index element={<Awards />} />
          </Route>
          <Route path="contact">
            <Route index element={<Contact />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppLoader;
