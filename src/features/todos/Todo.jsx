/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";
import Complated from "../../components/body/Complated";
import { updateTodo } from "./todosSlice";
import { useDispatch } from "react-redux";

const Todo = ({ todo }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const times = String(todo.startDate).split(" ");
  const weekName = String(times[0]);
  const date = String(times[2]);
  const month = String(times[1]);

  const handleComplated = () => {
    let data;
    if (todo.complated === false) {
      data = {
        ...todo,
        complated: true,
      };
    } else if (todo.complated === true) {
      data = {
        ...todo,
        complated: false,
      };
    }

    dispatch(updateTodo({ id: todo.id, data }));
  };

  return (
    <section>
      <div className="flex gap-3 border-b border-gray-100 py-3 cursor-pointer">
        <Complated todo={todo} handleComplated={handleComplated} />
        <Link to={`/todo/${todo.id}`} state={{ background: location }}>
          <div>
            <h1 className="text-[15px]">{todo.todoName}</h1>
            <p className="text-[15px] text-gray-600 my-1">
              {todo.text.slice(0, 100)}
            </p>
            <div className="flex gap-10">
              <p className="text-xs">
                {weekName} {date} {month}
              </p>
              <span className="text-xs">{todo.Tags}</span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Todo;
