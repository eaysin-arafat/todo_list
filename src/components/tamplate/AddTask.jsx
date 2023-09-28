import { useState } from "react";
import Priority from "../body/Priority";
import { useDispatch } from "react-redux";
import { addTodo } from "../../features/todos/todosSlice";

const AddTask = () => {
  const [todoName, setTodoName] = useState("");
  const [text, setText] = useState("");
  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  const dispatch = useDispatch();

  const canSave =
    [todoName, text].every(Boolean) && addRequestStatus === "idle";

  const onSavePostClicked = () => {
    if (canSave) {
      try {
        setAddRequestStatus("pending");
        dispatch(addTodo({ todoName, text })).unwrap();

        setTodoName("");
        setText("");
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
                placeholder="title"
                className="font-semibold text-xl outline-none"
                value={todoName}
                onChange={(e) => setTodoName(e.target.value)}
              />
              <input
                type="text"
                placeholder="description"
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
                <Priority />
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
          <div className="flex justify-between px-5 py-3 pb-4">
            <div>Inbox</div>
            <div className="flex gap-3">
              <button className="bg-[#eee0e0] p-1 rounded-md w-24  font-semibold">
                Cancle
              </button>
              <button
                className="bg-[#DC4C3E] p-1 rounded-md w-24 text-white font-semibold"
                onClick={onSavePostClicked}
                disabled={!canSave}
              >
                Add Task
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddTask;
