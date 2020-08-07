import React, { Component } from "react";
import ReactDOM from "react-dom";
import Todo from "./todo";

import { CardColumns } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

class Todos extends Component {
  state = {
    todos: [
      {
        title: "Todo Title",
        description:
          "Quickly manage snavigation, components, and more with a full suite of responsive flexbox utilities. For more complex implementations, custom CSS may be necessary.",
        timestamp: 1596723026,
        status: "completed",
        color: "",
        id: "fsdfsdafaswrwe",
      },
      {
        title: "Todo Title 1",
        description:
          "Quickly manage the layout, alignment, and sizing of grid columns, navigation, components, and more with a full suite of responsive flexbox utilities. For more complex implementations, custom CSS may be necessary.",
        timestamp: 1596723426,
        status: "incomplete",
        color: "",
        id: "fasdfs55drwe",
      },
      {
        title: "Todo Title",
        description: "Quickly manage snavigation, .",
        timestamp: 1596723026,
        status: "completed",
        color: "",
        id: "fsdfsdafassadtrywrwe",
      },
      {
        title: "Todo Title 1",
        description: "Quickly manage the layout, ",
        timestamp: 1596723426,
        status: "incomplete",
        color: "",
        id: "fasdfsdrwe",
      },
      {
        title: "Todo Title 1",
        text: "Quickly manage the layout, ",
        timestamp: 1596723426,
        status: "incomplete",
        color: "",
        id: "fasdfsdrttwe",
      },
    ],
    incompleCount: "",
  };

  getIncompleteTodos = () => {
    const count = this.state.todos.filter(
      (item) => item.status === "incomplete"
    ).length;
    this.setState({ incompleCount: count });
  };

  async fetchTodos() {
    // await fetch("https://api-react-todo.herokuapp.com/todos").then((data) => {
    //   console.log("data", data);
    // });
    fetch("https://api-react-todo.herokuapp.com/todos")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        this.setState({ todos: data.data });
      });
  }

  componentDidMount() {
    this.getIncompleteTodos();
    this.fetchTodos();
  }

  render() {
    return (
      <div>
        <h3 className="count">{this.state.incompleCount} Todos Left</h3>
        <CardColumns className="d-flex flex-wrap justify-content-center align-items-center">
          {this.state.todos.map((item) => (
            <div className="p-2" key={item.id}>
              <Todo todo={item} />
            </div>
          ))}
        </CardColumns>
      </div>
    );
  }
}

export default Todos;
