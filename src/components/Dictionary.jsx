import React from "react";
import Term from "./Term";
import emojipedia from "../emojipedia.js";

function createTerm(emojiElement) {
  return (
    <Term name={emojiElement.name} emoji={emojiElement.emoji} meaning={emojiElement.meaning} />
  );
}

function Dictionary() {
  return (
    <dl className="dictionary">
      {emojipedia.map(createTerm)}
    </dl>
  );
}

export default Dictionary;