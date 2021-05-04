import React, { useState } from "react";
import TodoList from "./TodoList"

function App() {
  const [todos, setTodos] = useState(['Todos 1', 'Todos 2'])
  return (
    <>
  <TodoList todos={todos}/>
  <input type="text" />
  <button>Add Todo</button>
  <button>Clear Completed Todos</button>
  <div>0 Left to do</div>
  </>
  )
}

export default App;
