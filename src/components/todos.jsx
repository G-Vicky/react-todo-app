import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Todo from "./todo";

import { CardColumns }  from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css"

class Todos extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <CardColumns className="d-flex flex-wrap justify-content-center align-items-center">
                    <div  className="p-2">
                        <Todo/>
                    </div>
                </CardColumns>
            </div>
         );
    }
}
 
export default Todos;