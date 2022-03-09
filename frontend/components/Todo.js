import React from "react";

export default class Todo extends React.Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.toggleTodo(this.props.todo.id)}>
          {this.props.todo.completed ? "✓" : "✗"}
        </button>
        {this.props.todo.name}
      </div>
    );
  }
}
