import React, { useEffect } from "react";
import { rootPath } from "../../data/variables";
import { Link } from "react-router";

import { useAppState } from "../../AppStateContext";

const Header = () => {
  const { setHeaderReady } = useAppState();

  useEffect(() => {
    setHeaderReady(true);
  }, []);

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to={rootPath}>Home</Link>
          </li>
          <li>
            <Link to={`${rootPath}career`}>Career</Link>
          </li>
          <li>
            <Link to={`${rootPath}projects`}>Projects</Link>
          </li>
          <li>
            <Link to={`${rootPath}awards`}>Awards</Link>
          </li>
          <li>
            <Link to={`${rootPath}contact`}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
