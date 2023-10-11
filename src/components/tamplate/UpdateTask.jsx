/* eslint-disable react/prop-types */
import { useState } from "react";
import { updateTodo } from "../../features/todos/todosSlice";
import { useDispatch } from "react-redux";

const UpdateTask = ({ todos }) => {
  const [todoName, setTodoName] = useState(todos?.todoName);
  const [text, setText] = useState(todos.text);
  const [open, setOpen] = useState(false);
  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  const dispatch = useDispatch();

  const canSave =
    [todoName, text].every(Boolean) && addRequestStatus === "idle";

  const onSavePostClicked = () => {
    if (canSave) {
      try {
        setAddRequestStatus("pending");
        const data = {
          todoName,
          text,
          ...todos,
        };
        dispatch(updateTodo({ id: todos.id, data })).unwrap();

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
    <div>
      <div
        className={`flex flex-col gap-3 pt-3 pr-4 pl-3 pb-7 border border-gray-100 ${
          open && "border border-gray-200 rounded-md"
        }`}
      >
        <input
          type="text"
          placeholder="Task name"
          className="font-semibold text-xl outline-none"
          value={todoName}
          onChange={(e) => setTodoName(e.target.value)}
          onClick={() => setOpen(true)}
        />
        <input
          type="text"
          placeholder="Description"
          className="outline-none text-[15px]"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onClick={() => setOpen(true)}
        />
      </div>

      <div className="flex justify-end gap-3">
        {open && (
          <div className="flex gap-2 mt-3">
            <button
              className="bg-[#eee0e0] p-[5x] rounded-md w-[70px] text-base h-[30px] font-semibold"
              onClick={() => setOpen(!open)}
            >
              Cancle
            </button>
            <button
              className={`bg-[#DC4C3E] p-[5x] rounded-md w-[70px] text-base h-[30px] font-semibold ${
                !canSave && "opacity-30"
              }`}
              onClick={onSavePostClicked}
              disabled={!canSave}
            >
              Save
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UpdateTask;
