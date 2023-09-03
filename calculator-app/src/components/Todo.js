import { useState } from "react";
import { Backdrop } from "./Backdrop";
import { Modal } from "./Modal";

function Todo({ title, task }) {
  const [showModal, setShowModal] = useState(false);

  const deleteHandler = (task) => {
    setShowModal(true);
    console.log(task);
  };

  const closeModalHandler = () => {
    console.log("closing modal");
    setShowModal(false);
  };

  const confirmModalHandler = () => {
    console.log("Sending petition rest");
    closeModalHandler();
  };

  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{task}</p>
      <div className="actions">
        <button className="btn" onClick={() => deleteHandler(task)}>
          Delete
        </button>
      </div>
      {showModal && (
        <Modal onCancel={closeModalHandler} onConfirm={confirmModalHandler} />
      )}
      {showModal && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
}

export { Todo };
