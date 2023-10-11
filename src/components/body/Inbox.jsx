import { Fragment } from "react";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import { FaRegCommentAlt } from "react-icons/fa";
import { AiOutlineEllipsis } from "react-icons/ai";
import TodosList from "../../features/todos/TodosList";
import ShortcurAddTask from "../tamplate/ShortcurAddTask";

const Inbox = () => {
  return (
    <Fragment>
      <div>
        <div className="flex justify-between">
          <div className="">
            <h2 className="text-xl font-extrabold">Inbox</h2>
          </div>
          <div className="flex items-center gap-4">
            <HiOutlineViewGridAdd className="text-gray-700" />
            <h2 className="font-semibold">View</h2>
            <div className="flex items-center gap-2">
              <FaRegCommentAlt className="mt-1" /> <span>Comments</span>
            </div>
            <div>
              <AiOutlineEllipsis className="font-extrabold text-lg mt-1" />
            </div>
          </div>
        </div>

        <div className="mt-3 mb-7">
          <TodosList />
          <ShortcurAddTask
            IconColor="red"
            hoverBgColor="red"
            hoverColor="text-white"
            text="Add task"
            other=""
            isBorder="border border-gray-200"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Inbox;
