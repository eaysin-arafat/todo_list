/* eslint-disable react/prop-types */
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import AddTask from "./AddTask";

const ShortcurAddTask = ({
  IconColor,
  hoverBgColor,
  hoverColor,
  text,
  other,
  isBorder,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div
        className={`flex items-center gap-3 mt-2 cursor-pointer group ${other} ${
          open === true && "hidden"
        }`}
        onClick={() => setOpen(!open)}
      >
        <AiOutlinePlus
          className={`text-${IconColor}-500 group-hover:bg-${hoverBgColor}-500 group-hover:${hoverColor} group-hover:rounded-full`}
        />
        <p className="text-gray-500 font-semibold">{text}</p>
      </div>
      <div
        className={`mt-1 ${
          open === false ? "hidden border-none" : `${isBorder} rounded-md`
        } ${open && "transition-all duration-150"}`}
      >
        {open && <AddTask open={open} setOpen={setOpen} />}
      </div>
    </div>
  );
};

export default ShortcurAddTask;
