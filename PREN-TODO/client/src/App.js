import "bootstrap/dist/css/bootstrap.min.css";

// <fragment> = <>
// components

import InputTodo from "./components/InputTodo";

function App() {
  return (
    <>
      <div className="container">
        <InputTodo />
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
