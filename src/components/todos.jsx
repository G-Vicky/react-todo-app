import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Todo from "./todo";

import { CardColumns }  from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css"

class Todos extends Component {
    state = { 
        todos : [
            {
                title : "Todo Title",
                text : "Quickly manage snavigation, components, and more with a full suite of responsive flexbox utilities. For more complex implementations, custom CSS may be necessary.",
                timestamp: 1596723026,
                status: "completed",
                color: "",
                id: "fsdfsdafaswrwe"
            },
            {
                title : "Todo Title 1",
                text : "Quickly manage the layout, alignment, and sizing of grid columns, navigation, components, and more with a full suite of responsive flexbox utilities. For more complex implementations, custom CSS may be necessary.",
                timestamp: 1596721026,
                status: "incomplete",
                color: "",
                id: "fasdfsdrwe"
            },
            {
                title : "Todo Title",
                text : "Quickly manage snavigation, components, and more with a full suite of responsive flexbox utilities. For more complex implementations, custom CSS may be necessary.",
                timestamp: 1596723026,
                status: "completed",
                color: "",
                id: "fsdfsdafassadwrwe"
            }
        ]
     };

     getIncompleteTodos = () => {
        var count = this.state.todos.length;
        count = this.state.todos.filter(item => item.status === "incomplete").length;
        console.log(count);
     }

    render() { 

        this.getIncompleteTodos();
        return ( 
            <div>
                <CardColumns className="d-flex flex-wrap justify-content-center align-items-center">
                    {
                        this.state.todos.map(item => 
                            <div  className="p-2" key={ item.id }>
                                <Todo  todo={ item }/>
                            </div>
                        )
                    }
                </CardColumns>
            </div>
         );
    }
}
 
export default Todos;