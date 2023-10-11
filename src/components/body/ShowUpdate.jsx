/* eslint-disable react/prop-types */
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { LiaTimesSolid } from "react-icons/lia";
import Complated from "./Complated";
import { updateTodo } from "../../features/todos/todosSlice";
import UpdateTask from "../tamplate/UpdateTask";
import ShortcurAddTask from "../tamplate/ShortcurAddTask";
import Priority from "./Priority";
import DateTime from "./date/DateTime";
import { getNumberDaysInMonth, range, getSortedDays } from "./date/utils";

const ShowUpdate = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const selectedTodo = todos.find((todo) => todo.id === id);
  const [commentClick, setCommentClick] = useState(false);
  const [selected, setIsSelected] = useState(selectedTodo.priority);

  // DateTime Component
  const currentDate = new Date(selectedTodo.endDate);
  const [currentMonth, setCurrentMonth] = useState(
    currentDate.getMonth() || new Date().getMonth()
  );
  const [currentYear, setCurrentYear] = useState(
    currentDate.getFullYear() || new Date().getFullYear()
  );

  const dates = range(1, getNumberDaysInMonth(currentYear, currentMonth) + 1);

  // const [addRequestStatus, setAddRequestStatus] = useState("idle");
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const handleClose = () => {
    navigate(-1);
  };

  const handleComplated = () => {
    const complatedData = todos.complated === true ? false : true;
    const data = {
      ...todos,
      complated: complatedData,
    };
    dispatch(updateTodo({ id: todos.id, data }));
  };

  return (
    <section className="absolute h-full w-full top-0 left-0 right-0 inset-0 bg-gray-950 bg-opacity-50 transition-colors">
      <div className="bg-white my-[40px] mx-[490px] h-[830px] rounded-lg">
        <div className="border-b border-gray-150">
          <div className="flex justify-between mx-6 py-2">
            <p className="font-semibold text-lg">Inbox</p>
            <div className="flex gap-5 text-lg">
              <button>
                <BiSolidUpArrow />
              </button>
              <button>
                <BiSolidDownArrow />
              </button>
              <button>
                <BsThreeDots />
              </button>
              <button onClick={handleClose}>
                <LiaTimesSolid />
              </button>
            </div>
          </div>
        </div>
        <div className="flex px-5 mt-3">
          <div className="w-3/4 flex">
            <div className="flex w-[4.5%] mt-3">
              <Complated
                todo={selectedTodo}
                handleComplated={handleComplated}
              />
            </div>
            <div className="w-[90%]">
              <div className="w-full mb-5">
                <UpdateTask todos={selectedTodo} />
              </div>
              <button className="w-full">
                <ShortcurAddTask
                  IconColor=""
                  hoverBgColor=""
                  hoverColor=""
                  text="Add sub-task"
                  other="text-sm"
                  isBorder="border border-gray-200"
                />
              </button>
              <div className="mt-5 flex gap-4 ">
                <span className="">E</span>
                <input
                  type="text"
                  placeholder="Comment"
                  className={`outline-none border border-gray-180 rounded-md w-full px-2 text-start ${
                    commentClick && "h-16 "
                  }`}
                  onClick={() => setCommentClick(!commentClick)}
                />
              </div>
            </div>
          </div>
          <div className="w-1/4 divide-y divide-gray-200">
            <div className="py-2">
              <h1>Project</h1>
              <p>Index</p>
            </div>
            <div className="py-2 relative">
              <h1 onClick={() => setOpen(!open)}>Due date +</h1>
              <div className="absolute top-8 z-10">
                {open && (
                  <DateTime
                    todos={selectedTodo}
                    open={open}
                    setOpen={setOpen}
                    dates={dates}
                    currentYear={currentYear}
                    setCurrentYear={setCurrentYear}
                    currentMonth={currentMonth}
                    setCurrentMonth={setCurrentMonth}
                    getSortedDays={getSortedDays}
                  />
                )}
              </div>
            </div>
            <div className="py-2">
              <h1>Priority</h1>
              <div>
                <Priority
                  selected={selected}
                  setIsSelected={setIsSelected}
                  todos={selectedTodo}
                />
              </div>
            </div>
            <div className="py-2">Labels</div>
            <div className="py-2">Reminders</div>
            <div className="py-2">Location</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowUpdate;
