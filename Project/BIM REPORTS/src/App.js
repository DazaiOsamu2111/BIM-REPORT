import { useState } from "react";
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";
import Table from "./components/Table/Table";
import { Data } from "./components/Data/Data";
import ModalWindow from "./components/Modal/ModalWindow";
import "./App.css";

function App() {
  const [todos, setTodos] = useState(Data);

  const addTodoHandler = (text) => {
    const newTodo = {
      text: text,
      isCompleted: false,
      id: Number((Math.random() * 1000).toFixed(0)),
    };
    console.log(newTodo);
    setTodos([...todos, newTodo]);
  };

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <header className="headerBIM">
        <h1>BIM REPORTS</h1>
      </header>
      <ModalWindow />
      <Table data={todos} />
      {/* <TodoForm addTodo={addTodoHandler} />
      <TodoList todos={todos} deleteTodo={deleteTodoHandler} /> */}
    </div>
  );
}

export default App;
