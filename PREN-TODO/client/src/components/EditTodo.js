import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Modal } from "bootstrap"; //import後解決視窗無法彈出的問題

const EditTodo = ({ todo }) => {
  const [description, setDescription] = useState(todo.description);
  const [show, setShow] = useState(false);
  const handleEditBtn = () => {
    setShow(true);
  };
  //edit description function
  console.log(show);

  const updateDescription = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch(
        `http://localhost:5000/todos/${todo.todo_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <>
      {/* <button
        type="button"
        className="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${todo.todo_id}`}
      > */}
      <button
        type="button"
        className="btn btn-warning"
        data-bs-toggle="modal"
        data-bs-target={`#id${todo.todo_id}`}
        onClick={handleEditBtn}
      >
        Edit
      </button>
      {/* id = id10 */}
      <div
        className="modal fade"
        id={`id${todo.todo_id}`}
        // tabIndex="-1"
        aria-labelledby={`id${todo.todo_id}Label`}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id={`id${todo.todo_id}Label`}>
                Edit Todo
              </h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => setDescription(todo.description)}
              >
                &times;
              </button>
            </div>

            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              {/*Edit Todo 讓彈出視窗內的文字可以修改*/}
              {/*52 value={description || ""}*/}
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-bs-dismiss="modal"
                onClick={(e) => updateDescription(e)}
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => setDescription(todo.description)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditTodo;
