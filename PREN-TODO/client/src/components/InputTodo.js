import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react"; //rafce自動import(套件名ES7 React/Redux/GraphQL/React-Native snippets)

const InputTodo = () => {
  const [description, setDescription] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content:Type": "application/json" },
        body: JSON.stringify(body),
      });

      console.log(response);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <h1 className="text-center mt-5">PERN Input Todo List</h1>
      <form className="d-flex mt-5">
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </>
  );
};

export default InputTodo;
