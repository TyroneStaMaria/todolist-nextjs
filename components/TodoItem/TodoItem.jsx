import styles from "./TodoItem.module.css";
const TodoItem = (props) => {
  return (
    <div class={styles.container}>
      <p>
        {props.todo.id} {props.todo.name}
      </p>
      <button
        onClick={() => {
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
