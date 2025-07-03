import { Outlet } from "react-router";
import { Navbar } from "./components/layout/Navbar";

function App() {
  return (
    <>
      <div className="flex justify-center p-4 bg-indigo-950 items-center">
        <Navbar />
      </div>
      <Outlet />
    </>
  );
}

export default App;
