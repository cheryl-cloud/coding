import "bootstrap/dist/css/bootstrap.min.css";
// <fragment> = <>
// components

import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <div className="container">
                  <InputTodo />
                  <ListTodos />
                </div>
                {/* <h1></h1>
      <input />
      <button className="btn btn-primary">save</button>
      <>
      </> */}
              </li>
            </ul>
          </nav>
        </div>
      </Router>
    </>
  );
}

export default App;
