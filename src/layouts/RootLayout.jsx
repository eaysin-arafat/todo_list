import { Outlet } from "react-router-dom";
import Navbar from "./../components/navbar/Navbar";

const RootLayout = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="md:ml-[450px] mx-[500px]">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
