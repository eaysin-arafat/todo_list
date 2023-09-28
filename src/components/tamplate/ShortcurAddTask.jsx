import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import AddTask from "./AddTask";

const ShortcurAddTask = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div
        className={`flex items-center gap-3 mt-2 cursor-pointer ${
          open === true && "hidden"
        }`}
        onClick={() => setOpen(!open)}
      >
        <AiOutlinePlus className="text-red-500" />
        <p className="text-gray-500 font-semibold">Add task</p>
      </div>
      <div
        className={`mt-1 border ${
          open === false ? "hidden" : "border-gray-300 rounded-md"
        } ${open && "transition-all duration-150"}`}
      >
        {open && <AddTask />}
      </div>
    </div>
  );
};

export default ShortcurAddTask;
