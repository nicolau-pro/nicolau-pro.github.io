import { createContext, useContext, useState } from "react";

const AppStateContext = createContext();

export const AppStateProvider = ({ children }) => {
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

export const useAppState = () => useContext(AppStateContext);
