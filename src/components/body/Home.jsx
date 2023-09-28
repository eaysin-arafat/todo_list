import { useState } from "react";
import Navbar from "../navbar/Navbar";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Home = () => {
  const [open, setOpen] = useState(true);

  const handleToggle = () => {
    open === true ? setOpen(false) : setOpen(true);
  };

  return (
    <section>
      <header className="absolute w-screen">
        <Navbar handleToggle={handleToggle} />
      </header>
      <div className="flex gap-32">
        <div
          className={`bg-[#FAFAFA] h-screen pt-[55px] ${
            open === true ? "w-[450px] " : "hidden"
          } transition duration-500 ease-in-out`}
        >
          <div className={`${open === true && "transition-all duration-1000"}`}>
            <Sidebar />
          </div>
        </div>
        <div
          className={`${
            open === true
              ? "pt-[55px] w-full mr-[130px]"
              : "pt-[55px] w-full mr-[130px] ml-[441px]"
          }`}
        >
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Home;
