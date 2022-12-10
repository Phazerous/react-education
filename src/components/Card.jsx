import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";


function Card(props) {
  return (
    <div className='card'>
      <div className="top">
        <p className="name">{props.name}</p>
        <Avatar img={props.imgURL} />
      </div>

      <div className='bottom'>
        <Detail detailInfo={props.phone} />
        <Detail detailInfo={props.email} />
      </div>
    </div>
  );
}

export default Card;