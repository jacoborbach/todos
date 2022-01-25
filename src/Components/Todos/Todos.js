import React, { useContext, useState } from "react";
import { UserContext } from "../../UserContext";
import { TodosContext } from "../../TodosContext";
import axios from "axios";
import AddIcon from "@mui/icons-material/Add";
import "./Todos.css";

export default function Todos() {
  const { user, setUser } = useContext(UserContext);
  const { todos, setTodos } = useContext(TodosContext);
  const [showAdd, setShowAdd] = useState(false);
  const [newTodo, setNewTodo] = useState("");

  const handleTodo = (id) => {
    let foundIndex = todos.findIndex((x) => x.todo_id == id);
    let newArry = [...todos];
    if (newArry[foundIndex].status === "Closed") {
      axios
        .put("/api/opentodo", { id })
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
      newArry[foundIndex].status = "Open";
    } else {
      axios
        .put("/api/closetodo", { id })
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
      newArry[foundIndex].status = "Closed";
    }
    setTodos(newArry);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/addtodo", { todo: newTodo, user_id: user.id })
      .then((res) => {
        if (todos[0]) {
          setTodos((current) => [
            ...current,
            {
              id: res.data.id,
              description: res.data.description,
              status: res.data.status,
            },
          ]);
        } else {
          setTodos([
            {
              todo_id: res.data.id,
              description: res.data.description,
              status: res.data.status,
            },
          ]);
        }
      })
      .catch((err) => console.log(err));
  };

  const addtodoInp = (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        id="addtodoInp"
        placeholder="Add a todo.."
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
    </form>
  );

  console.log(todos);
  return (
    <div>
      <div className="todos-container">
        <h2 id="user">{user.user}'s Todos</h2>
        {/* map of todos */}
        {todos[0]
          ? todos.map((todo) => (
              <div key={todo.todo_id}>
                {todo.status === "Open" ? (
                  <p
                    className="todo-list"
                    onClick={() => handleTodo(todo.todo_id)}
                  >
                    {todo.description}
                  </p>
                ) : (
                  <p
                    className="todo-list-closed"
                    onClick={() => handleTodo(todo.todo_id)}
                  >
                    {todo.description}
                  </p>
                )}
              </div>
            ))
          : null}
        <AddIcon id="addIcon" onClick={() => setShowAdd(true)} />
        {showAdd ? addtodoInp : null}
      </div>
    </div>
  );
}
