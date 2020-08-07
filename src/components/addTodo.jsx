import React, { Component } from 'react';
import addIcon from "../add-icon1.jpg";

import { Modal, Button, Form }  from "react-bootstrap";

class AddTodo extends Component {

    constructor() {
        super();
        this.state = {
            show: false,
            title: "",
            description: ""
        }
    }

    handleSubmit = (data) => {
        console.log(data);
    }

    handleInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleModal = () => {
        this.setState({
            show: !this.state.show
        })
    }

    render() { 
        return ( 
            <React.Fragment>
                <div className="add-todo-btn">
                    <img 
                        src={addIcon} 
                        title="add todo" size="90" 
                        height="90" 
                        alt="addimg" 
                        className="add-todo-img"
                        onClick={this.handleModal}
                        >
                        </img>
                </div>
                <Modal show={this.state.show} centered>
                    <Modal.Header closeButton onClick={this.handleModal}>
                    <Modal.Title>Add To-do</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="formBasicTitle">
                                <Form.Label>Title</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder="Enter title" 
                                    name="title" 
                                    required
                                    value={this.state.title}
                                    onChange={this.handleInput}/>
                            </Form.Group>

                            <Form.Group controlId="formBasicText">
                                <Form.Label>Description</Form.Label>
                                <Form.Control 
                                    as="textarea" 
                                    rows="3" 
                                    name="description"
                                    value={this.state.description}
                                    onChange={this.handleInput}/>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleModal}>
                        Close
                    </Button>
                    <Button variant="success" onClick={this.handleSubmit}>
                        Add
                    </Button>
                    </Modal.Footer>
                </Modal>
            </React.Fragment>
         );
    }
}
 
export default AddTodo;