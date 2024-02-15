import styles from "./Todo.module.css";
import { ReactComponent as Check } from "../../svg/check.svg" 
import { ReactComponent as Refresh } from "../../svg/refresh.svg" 
import { ReactComponent as Trash } from "../../svg/trash.svg" 

function Todo({ todo, deleteTodo }) {
  return (
    <div className={styles.todo} onDoubleClick={() => deleteTodo(todo.id)}>
      <div className={styles.todoText}>{todo.text}</div>
      <Trash className={styles.deleteIcon} onClick={() => deleteTodo(todo.id)}/>
      <Check  className={styles.checkIcon}/>
    </div>
  );
}

export default Todo;
