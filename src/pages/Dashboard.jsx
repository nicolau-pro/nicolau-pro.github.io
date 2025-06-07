import { Outlet } from "react-router";
import Header from "../components/molecules/Header";
import Footer from "../components/molecules/Footer";

function Dashboard() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Dashboard;
