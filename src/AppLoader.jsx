import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Career from "./pages/career/Home";
import Company from "./pages/career/Company";
const rootPath = "/"; // adjust as needed

function AppLoader() {
  const [companies, setCompanies] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/companies")
      .then((res) => res.json())
      .then((data) => setCompanies(data))
      .catch((error) => {
        console.error("Failed to load companies:", error);
        setCompanies([]); // fallback
      });
  }, []);

  if (!companies) {
    return <div>Loading...</div>; // or your loader component
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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppLoader;

// import React, { useEffect, useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router";
// import Dashboard from "./pages/Dashboard";
// import Home from "./pages/Home";
// import Career from "./pages/career/Home";
// import Company from "./pages/career/Company";
// import { Companies } from "./data/companies";
// import "./styles/styles.scss";

// const root = document.getElementById("root");
// const rootPath = "/"; //root.getAttribute("data-root-path") || "/r5-deploy/";

// // https://reactrouter.com/start/declarative/routing

// ReactDOM.createRoot(root).render(
//   <BrowserRouter>
//     <Routes>
//       <Route path={rootPath} element={<Dashboard />}>
//         <Route index element={<Home />} />
//         <Route path="career">
//           <Route index element={<Career />} />
//           {Companies.map((company) => (
//             <Route
//               key={company.id}
//               path={company.theme}
//               element={<Company companyId={company.id} />}
//             />
//           ))}
//         </Route>
//       </Route>
//     </Routes>
//   </BrowserRouter>
// );
