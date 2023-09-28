import { Fragment } from "react";
import { Link } from "react-router-dom";
import { BsFillInboxFill, BsFillFilterSquareFill } from "react-icons/bs";
import { IoCalendarOutline } from "react-icons/io5";

const Sidebar = () => {
  return (
    <Fragment>
      <div className="bg-[#FAFAFA] pt-6">
        <div className="flex flex-col mx-6 gap-5 font-light">
          <div className="">
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  to="/inbox"
                  className="flex items-center justify-between hover:bg-[#EEEEEE] p-2 px-4 rounded-md"
                >
                  <span className="flex items-center gap-2">
                    <BsFillInboxFill className="text-[#3D7FE2]" /> Inbox
                  </span>
                  <span className="font-semibold">0</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="flex items-center justify-between hover:bg-[#EEEEEE] p-2 px-4 rounded-md"
                >
                  <span className="flex items-center gap-2">
                    <IoCalendarOutline className="text-[#4B9244]" /> Today
                  </span>
                  <span className="font-semibold">0</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/Upcoming"
                  className="flex items-center gap-2 hover:bg-[#EEEEEE] p-2 px-4 rounded-md"
                >
                  <IoCalendarOutline className="text-[#2E338B]" /> Upcoming
                </Link>
              </li>
              <li>
                <Link
                  to="/filters&labels"
                  className="flex items-center gap-2 hover:bg-[#EEEEEE] p-2 px-4 rounded-md"
                >
                  <BsFillFilterSquareFill className="text-[#C87508]" />
                  Filters & Labels
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold">Workspace</h1>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  to="personal"
                  className="flex items-center gap-2 hover:bg-[#EEEEEE] p-2 px-4 rounded-md"
                >
                  <span className="h-2 w-2 rounded-full bg-green-500"></span>
                  <span>Personal</span>
                </Link>
              </li>
              <li>
                <Link
                  to="home"
                  className="flex items-center gap-2 hover:bg-[#EEEEEE] p-2 px-4 rounded-md"
                >
                  <span className="h-2 w-2 rounded-full bg-gray-500"></span>
                  <span> Home</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="font-semibold">project</h1>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  to=""
                  className="flex hover:bg-[#EEEEEE] p-2 px-4 rounded-md"
                >
                  Set up your team
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Sidebar;
