import React from "react";
import { FaStar } from "react-icons/fa";

function Star({ id, selected, handleClick }) {
  return (
    <FaStar id={id} style={selected ? { color: "red" } : { color: "green" }} onClick={handleClick} />
  );
}

export default Star;