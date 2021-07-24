import "bootstrap/dist/css/bootstrap.min.css";

// <fragment> = <>
// components

import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";

function App() {
  return (
    <>
      <div className="container">
        <InputTodo />
        <ListTodos />
      </div>
      {/* <h1></h1>
      <input />
      <button className="btn btn-primary">save</button>
      <>
      </> */}
    </>
  );
}

export default App;
