/**
 * For styling, we make use of css modules. We just add a '.module' in between the filename of our css file. Format: <ComponentName>.module.css
 * For consistency across the codebase, let's make sure when we import the css, we name it as 'styles'. See the example below.
 * Note: this is so that we can use repeating class names for our component styles and to avoid overlapping styles (unless it is used global).
 */
import styles from "./TodoForm.module.css";

const TodoForm = (props) => {
  // This function will handle the behavior whenever we submit the form.
  const handleSubmit = async (event) => {
    event.preventDefault();
    const todo = event.target.todo.value; // this gets the value of the input based on the name

    /* Here we use fetch api (https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) to call our serverless function 'add-todo'.
      This is similar to $.ajax if you have used jquery before in CCAPPDEV.
      This will just call the route https://<domain-name>.com/api/add-todo or http://localhost:3000/api/add-todo 
      and get the response returned from the API / serverless function
    */
    const response = await fetch("/api/add-todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: todo,
      }),
    });

    if (response.status == 200) {
      props.setTodos((todos) => [...todos, { id: todos.length, name: todo }]); // learn more how to update arrays in a state here: https://beta.reactjs.org/learn/updating-arrays-in-state
    }
  };

  return (
    <div>
      {/* handleSubmit will be passed on to the forms onSubmit event. This will call the
         handleSubmit function above whenever the form performs a 
         submit event (i.e. when enter is pressed or submit button is pressed).
      */}
      <form onSubmit={handleSubmit}>
        {/* To access the styles we imported earlier, just type in styles.<the class name you defined in your css file>.  
            Important note: in React, we use 'className' instead of 'class' to add classes to our elements. This is because there is already 
            the keyword 'class' in javascript   
        */}
        <input className={styles.formInput} type="text" name="todo" />
        <button type="submit">Enter a todo</button>
      </form>
    </div>
  );
};

export default TodoForm;
