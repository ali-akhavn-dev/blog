import Header from "./Header";
import Footer from "./Footer";
import { Outlet, ScrollRestoration } from "react-router";

function AppLayout() {
  return (
    <>
      <ScrollRestoration />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default AppLayout;
