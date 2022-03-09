import React from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import Axios from "axios";

const URL = "http://localhost:9000/api/todos";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  componentDidMount() {
    Axios.get(URL).then((response) => {
      this.setState({
        todos: response.data.data,
      });
      console.log(response.data.data);
    });
  }

  addTodo = (todo) => {
    Axios.post(URL, todo).then((response) => {
      this.setState({
        todos: [...this.state.todos, response.data.data],
      });
    });
  };

  toggleTodo = (id) => {
    Axios.patch(URL + "/" + id).then((response) => {
      const todos = this.state.todos.map((todo) => {
        if (todo.id === id) {
          return response.data.data;
        }
        return todo;
      });
      this.setState({
        todos: todos,
      });
    });
  };

  render() {
    return (
      <div>
        <Form addTodo={this.addTodo} />
        <TodoList todos={this.state.todos} toggleTodo={this.toggleTodo} />
      </div>
    );
  }
}
