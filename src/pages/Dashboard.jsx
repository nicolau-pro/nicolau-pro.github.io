import { Outlet } from "react-router";
import Header from "../components/molecules/Header";
import Footer from "../components/molecules/Footer";
import { useAppState } from "../AppStateContext";

function Dashboard() {
  const { HeaderReady, OutletReady, FooterReady } = useAppState();

  return (
    <>
      {/* <div>
        <span>{HeaderReady ? "HEADER" : "header"} </span>
        <span>{OutletReady ? "OUTLET" : "outlet"} </span>
        <span>{FooterReady ? "FOOTER" : "footer"} </span>
      </div> */}
      <Header />
      <Outlet />
      <Footer />
      {HeaderReady && OutletReady && FooterReady ? <div id="WELCOME" /> : null}
    </>
  );
}

export default Dashboard;
