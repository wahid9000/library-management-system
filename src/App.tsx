import { Outlet, useLocation } from "react-router";
import { Navbar } from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App() {
  const { pathname } = useLocation();
  return (
    <>
      <div>
        <Navbar />
      </div>
      <Outlet />
      {pathname == "/" && (
        <div>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
