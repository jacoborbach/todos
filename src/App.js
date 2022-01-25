import React, { useMemo, useState } from "react";
import "./App.css";
import routes from "./routes";
import { UserContext } from "./UserContext";
import { TodosContext } from "./TodosContext";

function App() {
  const [user, setUser] = useState(null);
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  const [todos, setTodos] = useState(null);
  const value2 = useMemo(() => ({ todos, setTodos }), [todos, setTodos]);

  return (
    <div className="App">
      <TodosContext.Provider value={value2}>
        <UserContext.Provider value={value}>{routes}</UserContext.Provider>
      </TodosContext.Provider>
    </div>
  );
}

export default App;
