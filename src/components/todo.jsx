import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { Card } from "react-bootstrap";

class Todo extends Component {
    state = { 
        createdAt: ""
     }

     componentDidMount() {
        console.log('Component mounted');
        this.getTimeStamp();
        setInterval(() => {
            this.getTimeStamp();
        }, 60000);
     }

    getTimeStamp()  {
        const { timestamp } = this.props.todo;
        var status = "";
        const currentTimestamp = Math.floor(Date.now() / 1000);
        const createdAt = currentTimestamp - timestamp;
        const timeTaken = Math.floor(createdAt / 60);
        if(timeTaken < 1){
            status = "just now";
        } else if(timeTaken < 99) {
            status = (timeTaken === 1) ? `${timeTaken} min ago` : `${timeTaken} mins ago`;
        }
        this.setState({
            createdAt: status
        });
    }

    render() { 
        const { title, text, color } = this.props.todo
        return ( 
            <React.Fragment>
                <Card className="text-center card" bg={ color }>
                    <Card.Body>
                    <Card.Title>{ title }</Card.Title>
                    <Card.Text>
                        { text }
                    </Card.Text>
                    <Card.Text className="text-right">
                        <small className="text-muted">{ this.state.createdAt }</small>
                    </Card.Text>
                    </Card.Body>
                </Card>
            </React.Fragment>
         );
    }
}
 
export default Todo;