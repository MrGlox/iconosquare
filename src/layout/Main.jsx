import { Outlet } from "react-router-dom";
import { Header, Footer } from "components";

const Main = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

export default Main;
