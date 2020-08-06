import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { Card } from "react-bootstrap";

class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <h1 className="todo-title">React - Todo</h1>

                <div>
                    3 Todos Left
                </div>

            </React.Fragment>
         );
    }
}
 
export default Header;