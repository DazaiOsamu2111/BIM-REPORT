import Todo from "./Todo";
import styles from "./TodoList.module.css";

function TodoList({ todos, deleteTodo }) {
  // const {todos} = props
  return (
    <div className={styles.todoListContainer}>
      {!todos.length && <h2>Заполните список</h2>}
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
}

export default TodoList;
