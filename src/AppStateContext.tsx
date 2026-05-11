import { createContext, useContext, useState } from "react";
import type { Dispatch, ReactElement, ReactNode, SetStateAction } from "react";

type AppState = {
  HeaderReady: boolean;
  setHeaderReady: Dispatch<SetStateAction<boolean>>;
  OutletReady: boolean;
  setOutletReady: Dispatch<SetStateAction<any>>;
  FooterReady: boolean;
  setFooterReady: Dispatch<SetStateAction<boolean>>;
  CurrentPath: string | null;
  setCurrentPath: Dispatch<SetStateAction<string | null>>;
};

const AppStateContext = createContext<AppState | null>(null);

export const AppStateProvider = ({ children }: { children: ReactNode }): ReactElement => {
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
