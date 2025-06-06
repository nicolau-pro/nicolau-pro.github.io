import { Outlet } from "react-router";

function Dashboard() {
  const rootPath = "/";

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <a href={rootPath}>Home</a>
            </li>
            <li>
              <a href={rootPath + "career"}>Career</a>
            </li>
            <li>
              <a href={rootPath + "projects"}>Projects</a>
            </li>
            <li>
              <a href={rootPath + "awards"}>Awards</a>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
      <footer>
        <p>© 2025 Radu Nicolau</p>
      </footer>
    </>
  );
}

export default Dashboard;
