import React from "react";

function ToDoItem(props) {
  return (
    <li onClick={() => {
      props.onClick(props.id);
    }}>{props.text}</li>
  );
}

export default ToDoItem;