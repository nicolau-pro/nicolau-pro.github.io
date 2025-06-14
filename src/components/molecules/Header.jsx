import React, { useEffect, useState } from "react";
import { rootPath } from "../../data/variables";
import { Link } from "react-router";
import { useAppState } from "../../AppStateContext";

const Header = () => {
  const { setHeaderReady } = useAppState();

  const Links = [
    { path: "", name: "Home" },
    { path: "career", name: "Career" },
    { path: "projects", name: "Projects" },
    { path: "awards", name: "Awards" },
    { path: "contact", name: "Contact" },
  ];

  const [CurrentPath, setCurrentPath] = useState(null);

  useEffect(() => {
    setCurrentPath(location.pathname.split("/")[1]);
  }, [location]);

  useEffect(() => {
    setHeaderReady(true);
  }, []);

  function handleOnClick(path) {
    setCurrentPath(path);
  }

  return (
    <header>
      <nav>
        <ul>
          <li>
            <img
              alt="Nicolau.pro logo"
              className="logo"
              src="/web-app-manifest-192x192.png"
            />
          </li>

          {Links.map((link) => (
            <li key={link.name}>
              <Link
                to={`${rootPath}${link.path}`}
                className={CurrentPath === link.path ? "current" : null}
                aria-label={
                  CurrentPath === link.path
                    ? `${link.name}, current section`
                    : null
                }
                onClick={() => handleOnClick(link.path)}
              >
                {link.name.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
