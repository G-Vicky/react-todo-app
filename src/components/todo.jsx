import React, { Component } from "react";
import ReactDOM from "react-dom";

import { Card } from "react-bootstrap";

class Todo extends Component {
  state = {
    createdAt: "",
  };

  componentDidMount() {
    console.log("Component mounted");
    this.getTimeStamp();
    setInterval(() => {
      this.getTimeStamp();
    }, 60000);
  }

  getTimeStamp() {
    const { timestamp } = this.props.todo;
    var status = "";
    const currentTimestamp = Math.floor(Date.now() / 1000);
    const createdAt = currentTimestamp - timestamp;
    const timeTaken = Math.floor(createdAt / 60);
    if (timeTaken < 1) {
      status = "just now";
    } else if (timeTaken < 99) {
      status =
        timeTaken === 1 ? `${timeTaken} min ago` : `${timeTaken} mins ago`;
    }
    this.setState({
      createdAt: status,
    });
  }

  handleEdit = () => {
    alert(this.props.todo.title);
  };

  render() {
    const { title, description, color, status } = this.props.todo;
    return (
      <React.Fragment>
        <Card
          className="text-center card"
          className={status === "completed" ? " completed" : null}
          bg={color}
          onClick={this.handleEdit}
        >
          <Card.Body>
            <Card.Title className="card-title">
              <h3>{title}</h3>
            </Card.Title>
            <Card.Text>{description}</Card.Text>
            <Card.Text className="text-right">
              <small className="text-muted">{this.state.createdAt}</small>
            </Card.Text>
          </Card.Body>
        </Card>
      </React.Fragment>
    );
  }
}

export default Todo;
