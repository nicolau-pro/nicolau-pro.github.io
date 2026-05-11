import { useEffect } from "react";
import { useLocation } from "react-router";
import type { RouteChangeListenerProps } from "./interfaces";

export function RouteChangeListener({ onPathChange }: RouteChangeListenerProps): null {
  const location = useLocation();

  useEffect((): void => {
    onPathChange(location.pathname);
  }, [location.pathname]);

  return null;
}
