/*
Objectives
Use ComponentDidMount to make an API call to GET resources from an API
Use a submit event handler to POST a new resource to the server
Use a click handler to PATCH an existing resource on the server
Update the frontend to keep it in sync with the state of the server

GET http://localhost:9000/api/todos
Expects no payload
Makes no changes on the server
responds with 200 OK and a payload with all the todos

POST http://localhost:9000/api/todos
Expects a payload with name (string) and optional completed (boolean)
Creates a new todo on the server
responds with 201 Created and a payload with the new todo

PATCH http://localhost:9000/api/todos/:id
Expects no payload
Flips the completed property on the todo with the id provided in the URL
Responds with 200 OK and the updated todo

Your app should display a list of todos, an input field, a submit button, and a button to filter out completed todos
<App /> will hold all of the state machinery:
Application state, held in component state
State-changing methods, event handlers
<TodoList /> receives your todos array and iterates over the list generating a new <Todo /> for each element in the array
<Todo /> is a component that takes in the todo data and displays the task to the screen
<Form /> will hold your input field and your Add Todo and Clear Completed buttons
Your input field should take in user input, and allow a user to press Enter or click on the Submit Button to add a todo to your list
Once a todo is submitted, the Todo List should re-render and show the added todo
*/

import React from "react";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      completed: false,
    };
  }

  handleChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      name: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <button type="submit">Add Todo</button>
      </form>
    );
  }
}
