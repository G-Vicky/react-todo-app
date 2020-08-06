import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from "./components/todos";
import Header from "./components/header";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <div className="App">
        <Header />
        <Todos />
      </div>
  );
}

export default App;
