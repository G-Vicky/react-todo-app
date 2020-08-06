import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from "./components/todos"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
     <h1>
       React-ToDo 
     </h1>
     <Todos />
    </div>
  );
}

export default App;
