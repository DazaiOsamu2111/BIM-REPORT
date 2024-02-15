import { useState } from "react";
import styles from "./TodoForm.module.css";
function TodoForm({ addTodo }) {
  const [text, setText] = useState({
    key1: 1,
    key2: 2,
    key3: 3,
    key4: 5,
    key1: 1,
    key1: 1,
    key1: 1,
    key1: 1,
  });
  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (text !== "") {
      addTodo(text);
    }
    setText("");
  };

  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <input
          placeholder="Добавьте новый список"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="sumbit">Утвердить</button>
      </form>
    </div>
  );
}

export default TodoForm;
