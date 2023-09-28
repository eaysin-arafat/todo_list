import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchTodos } from "./todosSlice";
import Todo from "./Todo";

const SingleTodo = () => {
  const todos = useSelector((state) => state.todos.todos);
  console.log(todos);
  const status = useSelector((state) => state.todos.status);
  const error = useSelector((state) => state.todos.error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  let content;

  if (status === "loading") {
    content = <p>Loading</p>;
  } else if (status === "succeeded") {
    content = (
      <div>
        {todos.map((todo) => (
          <div key={todo.id}>
            {console.log(todo)}
            <Todo todo={todo} />
          </div>
        ))}
      </div>
    );
  } else if (status === "failed") {
    content = <p>{error.message}</p>;
  }

  return <div>{content}</div>;
};

export default SingleTodo;
