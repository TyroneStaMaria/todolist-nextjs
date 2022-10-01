import { notion } from "../../api/notion";
import styles from "./TodoItem.module.css";

const TodoItem = (props) => {
  return (
    <div className={styles.container}>
      <p>{props.todo.name}</p>
      <button
        onClick={async () => {
          const response = await fetch("api/remove-todo", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id: props.todo.id,
            }),
          });
          props.setTodos((todos) =>
            todos.filter((item) => item.id !== props.todo.id)
          );
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
