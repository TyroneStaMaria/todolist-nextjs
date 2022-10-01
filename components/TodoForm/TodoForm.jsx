import styles from "./TodoForm.module.css";

const TodoForm = (props) => {
  // This function will handle the behavior whenever we submit the form.
  const handleSubmit = (event) => {
    event.preventDefault();
    const todo = event.target.todo.value; // this gets the value of the input based on the name
    props.setTodos((todos) => [...todos, { id: todos.length, name: todo }]);
  };

  return (
    <div>
      {/* handleSubmit will be passed on to the forms onSubmit event. This will call the
         handleSubmit function above whenever the form performs a 
         submit event (i.e. when enter is pressed or submit button is pressed).
      */}
      <form onSubmit={handleSubmit}>
        <input class={styles.formInput} type="text" name="todo" />
        <button type="submit">Enter a todo</button>
      </form>
    </div>
  );
};

export default TodoForm;
