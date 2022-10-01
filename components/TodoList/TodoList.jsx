import { useState, useEffect } from "react";
import TodoForm from "../TodoForm/TodoForm";
import TodoItem from "../TodoItem/TodoItem";
import styles from "./TodoList.module.css";

const TodoList = (props) => {
  // useState returns a pair of values. 'todos' holds the set of todos that we have.
  // While 'setTodos' lets us update the state of our 'todos' variable.
  // We initialize the 'todos' with an empty array by setting passing [] into useState.
  const [todos, setTodos] = useState(props.todoItems);
  return (
    <div className={styles.container}>
      <TodoForm setTodos={setTodos} />
      <div className={styles.todosContainer}>
        {todos.map((todo, index) => {
          return <TodoItem key={index} todo={todo} setTodos={setTodos} />;
        })}
      </div>
    </div>
  );
};

export default TodoList;
