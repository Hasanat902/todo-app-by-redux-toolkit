import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();


  return (
    <div className="text-center">
      <h2 className="text-2xl mb-5">Todos</h2>
      {todos.map((todo) => (
        <>
          <div
            className="text-xl bg-gray-800 w-64 mx-auto rounded text-white"
            key={todo.id}
          >
            {todo.text}
          </div>
          <button
            onClick={() => dispatch(removeTodo(todo.id))}
            className="bg-red-500 rounded text-yellow-400 text-xl"
          >
            Delete
          </button>
        </>
      ))}
    </div>
  );
};

export default Todos;
