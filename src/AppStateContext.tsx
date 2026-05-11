import { createContext, useContext, useState } from "react";
import type { ReactElement } from "react";
import type { AppChildren, AppState } from "@/interfaces";

const AppStateContext = createContext<AppState | null>(null);

export const AppStateProvider = ({ children }: AppChildren): ReactElement => {
  const [CurrentPath, setCurrentPath] = useState(null);
  const [HeaderReady, setHeaderReady] = useState(false);
  const [OutletReady, setOutletReady] = useState(false);
  const [FooterReady, setFooterReady] = useState(false);

  const value = {
    HeaderReady,
    setHeaderReady,
    OutletReady,
    setOutletReady,
    FooterReady,
    setFooterReady,
    CurrentPath,
    setCurrentPath,
  };

  return (
    <AppStateContext.Provider value={value}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = (): AppState => useContext(AppStateContext) as AppState;
