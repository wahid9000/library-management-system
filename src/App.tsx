import { Outlet } from "react-router";
import { Navbar } from "./components/layout/Navbar";

function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <Outlet />
    </>
  );
}

export default App;
