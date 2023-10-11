/* eslint-disable react/prop-types */
import { useState } from "react";
import Priority from "../body/Priority";
import { useDispatch } from "react-redux";
import { addTodo } from "../../features/todos/todosSlice";
import { nanoid } from "@reduxjs/toolkit";
import Button from "./Button";

const AddTask = ({ open, setOpen }) => {
  const [todoName, setTodoName] = useState("");
  const [text, setText] = useState("");
  const [addRequestStatus, setAddRequestStatus] = useState("idle");
  const [selected, setIsSelected] = useState("Priority");

  const id = nanoid();
  const dates = new Date();
  const weekName = dates.toLocaleDateString("en-Us", { weekday: "short" });
  const date = dates.getDate();
  const month = dates.toLocaleString("default", { month: "short" });
  const startDate = `${weekName} ${date} ${month}`;

  const dispatch = useDispatch();

  const canSave =
    [todoName, text].every(Boolean) && addRequestStatus === "idle";

  const onSavePostClicked = () => {
    if (canSave) {
      try {
        setAddRequestStatus("pending");
        dispatch(
          addTodo({
            id,
            todoName,
            text,
            startDate,
            priority: selected,
            complated: false,
            isInExpandState: false,
          })
        ).unwrap();

        setTodoName("");
        setText("");
        setOpen(!open);
      } catch (e) {
        console.error(e);
      } finally {
        setAddRequestStatus("idle");
      }
    }
  };

  return (
    <section>
      <div className="bg-white rounded-md w-full pt-2">
        <form action="">
          <div className="border-b border-gray-300 px-5 pb-2 mb-2">
            <div className="flex flex-col ">
              <input
                type="text"
                placeholder="Task name"
                className="font-semibold text-xl outline-none"
                value={todoName}
                onChange={(e) => setTodoName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Description"
                className="outline-none"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </div>
            <div className="flex gap-4 text-[14px] my-2">
              <p className="border-[.5px] border-gray-300 rounded-md px-1 text-gray-500">
                Due date
              </p>
              <div className="border-[.5px] border-gray-300 rounded-md px-3 text-gray-500">
                <Priority
                  selected={selected}
                  setIsSelected={setIsSelected}
                  positionCss="left-[-38px]"
                />
              </div>
              <p className="border-[.5px] border-gray-300 rounded-md px-1 text-gray-500">
                {" "}
                Reminders
              </p>
              <i className="border-[.5px] border-gray-300 rounded-md px-1 text-gray-500">
                ...
              </i>
            </div>
          </div>
          <div className="flex justify-between pl-4 pr-2 py-3 pb-4">
            <div>Inbox</div>
            <div className="flex gap-3">
              <Button
                setOpen={() => setOpen(!open)}
                color="#eee0e0"
                text="Cancle"
              />
              <Button
                setOpen={onSavePostClicked}
                disabled={!canSave}
                color="#DC4C3E"
                text="Add Task"
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddTask;
