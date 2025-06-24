
import { useSelector } from "react-redux";
import Formredux from "./Formredux";

function Todolist() {
  const todos = useSelector((state) => state.todos);
  console.log(todos);

  return (
    <ul className="list-group m-2">
      {
        todos.map((todo) => (
          <Formredux key={todo.id} id={todo.id} title={todo.title} />
        ))
      }
    </ul>
  );
}

export default Todolist;
