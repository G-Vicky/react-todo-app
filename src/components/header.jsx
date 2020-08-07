import React, { Component } from 'react'
import ReactDOM from 'react-dom'


class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <h1 className="todo-title">React - Todo</h1>
            </React.Fragment>
         );
    }
}
 
export default Header;