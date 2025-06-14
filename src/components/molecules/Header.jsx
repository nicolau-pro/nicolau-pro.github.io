import React, { useEffect } from "react";
import { rootPath } from "../../data/variables";
import { Link } from "react-router";
import { useAppState } from "../../AppStateContext";

const Header = () => {
  const { setHeaderReady, CurrentPath } = useAppState();

  const Links = [
    { path: "", name: "Home", icon: "home" },
    { path: "career", name: "Career", icon: "timeline" },
    { path: "projects", name: "Projects", icon: "view_in_ar" },
    { path: "awards", name: "Awards", icon: "emoji_events" },
    { path: "contact", name: "Contact", icon: "account_circle" },
  ];

  useEffect(() => {
    setHeaderReady(true);
  }, []);

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
              >
                <span class="material-icons desktop-hidden">{link.icon}</span>
                <span>{link.name.toUpperCase()}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
