import React, { useState } from "react";
import ButtonComponent from "./ButtonComponent";

function Task({ title, description, deleteTask, index }) {
  const [deleteTimeout, setDeleteTimeout] = useState(null);

  const handleDeleteClick = () => {
    // Clear existing timeout if any
    if (deleteTimeout) {
      clearTimeout(deleteTimeout);
    }

    // Set a new timeout for 2200 milliseconds
    const timeoutId = setTimeout(() => {
      deleteTask(index);
    }, 700);

    // Save the timeout ID in state
    setDeleteTimeout(timeoutId);
  };

  return (
    <div className="task">
      <div>
        <p>{title}</p>
        <span>{description}</span>
      </div>
      <button onClick={handleDeleteClick}  className="delBtnDiv">
        <ButtonComponent />
      </button>
    </div>
  );
}

export default Task;
