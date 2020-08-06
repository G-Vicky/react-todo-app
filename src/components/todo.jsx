import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { Card } from "react-bootstrap";

class Todo extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <Card className="text-center card">
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
                        content.{' '}
                    </Card.Text>
                    <Card.Text className="text-right">
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Text>
                    </Card.Body>
                </Card>
            </React.Fragment>
         );
    }
}
 
export default Todo;