import { useEffect } from "react";
import { useLocation } from "react-router";

export function RouteChangeListener({ onPathChange }) {
  const location = useLocation();

  useEffect(() => {
    onPathChange(location.pathname);
  }, [location.pathname]);

  return null;
}
