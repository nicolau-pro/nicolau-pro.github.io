import { useEffect } from "react";
import { useLocation } from "react-router";

type RouteChangeListenerProps = {
  onPathChange: (_path: string) => void;
};

export function RouteChangeListener({ onPathChange }: RouteChangeListenerProps): null {
  const location = useLocation();

  useEffect((): void => {
    onPathChange(location.pathname);
  }, [location.pathname]);

  return null;
}
