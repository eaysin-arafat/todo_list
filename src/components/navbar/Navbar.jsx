/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineMenu,
  AiOutlineStar,
  AiOutlinePlus,
  AiFillDownCircle,
  AiOutlineQuestionCircle,
} from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useState } from "react";
import AddTask from "../tamplate/AddTask";

const Navbar = ({ handleSidebarToggle }) => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((current) => !current);
  };

  return (
    <div className="bg-[#DC4C3E] overflow-x-hidden	">
      <div>
        <ul className="flex justify-between items-center mx-4 h-10 text-white text-xl ">
          <div className="flex items-center justify-center">
            <li className="mr-4 cursor-pointer" onClick={handleSidebarToggle}>
              <AiOutlineMenu />
            </li>
            <li className="mr-4">
              <Link to="/">
                <AiOutlineHome />
              </Link>
            </li>
            <li className="mr-4">
              <Link to="">
                <AiOutlineSearch />
              </Link>
            </li>
          </div>

          <div className="flex">
            <li className="mr-4">
              <Link to="">
                <AiOutlineStar />
              </Link>
            </li>
            <li className="mr-4">
              <AiOutlinePlus
                onClick={handleToggle}
                className="cursor-pointer"
              />
            </li>
            <li className="mr-4">
              <Link to="">
                <AiFillDownCircle />
              </Link>
            </li>
            <li className="mr-4">
              <Link to="">
                <AiOutlineQuestionCircle />
              </Link>
            </li>
            <li className="mr-4">
              <Link to="">
                <IoIosNotificationsOutline />
              </Link>
            </li>
            <li className="">
              <Link to="">
                <AiOutlineQuestionCircle />
              </Link>
            </li>
          </div>
        </ul>

        <div
          className={`absolute w-[700px] top-56 left-[950px] transform -translate-x-1/2 -translate-y-1/2 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] ${
            open === true && "transition duration-300 ease-in-out"
          }`}
        >
          {open && <AddTask open={open} setOpen={setOpen} />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
