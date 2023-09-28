/* eslint-disable react/prop-types */
import timeInfo from "../../components/tamplate/timeInfo";

const Todo = ({ todo }) => {
  // const times = timeInfo(todo.startDate);
  return (
    <div className="flex gap-3 border-b border-gray-100 py-3">
      <span
        className={`h-[18px] w-[18px] rounded-full border-[2px] mt-[5px] cursor-pointer ${
          todo.priority === "Normal" && "border-lime-600"
        }`}
      ></span>
      <div>
        <h1 className="text-[15px]">{todo.todoName}</h1>
        <p className="text-[15px] text-gray-600 my-1">
          {todo.text.slice(0, 180)}...
        </p>
        <div className="flex gap-10">
          <p className="text-xs">{/* {times.date} {times.month} */}</p>
          <span className="text-xs">{todo.Tags}</span>
        </div>
      </div>
    </div>
  );
};

export default Todo;
