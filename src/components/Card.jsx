import React from "react";

function Card(props) {
  return (
    <div className='card'>
      <div className="top">
        <p className="name">{props.name}</p>
        <img className='circle-img' src={props.imgURL} alt="avatar.png" />
      </div>

      <div className='bottom'>
      <p className='info'>{props.phone}</p>
      <p className='info'>{props.email}</p>
      </div>
    </div>
  );
}

export default Card;