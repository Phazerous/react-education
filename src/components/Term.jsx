import React from "react";
import TermTitle from "./TermTitle";
import TermDesc from "./TermDesc";

function Term(props) {
  return (
    <div className='term'>
      <TermTitle emoji={props.emoji} name={props.name}/>
      <TermDesc meaning={props.meaning}/>
    </div>
  );
}

export default Term;