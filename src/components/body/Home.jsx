import { useState } from "react";
import Navbar from "../navbar/Navbar";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Home = () => {
  const [open, setOpen] = useState(true);

  const handleSidebarToggle = () => {
    // open === true ? setOpen(false) : setOpen(true);
    setOpen((current) => !current);
    console.log("clicked");
  };

  return (
    <section className="w-screen h-screen overflow-x-hidden">
      <header className="absolute w-screen">
        <Navbar handleSidebarToggle={handleSidebarToggle} />
      </header>
      <div className="flex gap-20">
        <div
          className={`bg-[#FAFAFA] h-screen pt-[55px] duration-300 w-[550px] ${
            open === true ? "ml-8 mr-28" : "mr-6 invisible"
          }`}
        >
          <Sidebar />
        </div>
        <div className="w-full mr-[500px] pt-[80px] font-sans">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Home;
