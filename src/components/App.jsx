import React from "react";
import Card from "./Card";
import contacts from "../contacts";

const contact1 = contacts[0];
const contact2 = contacts[1];
const contact3 = contacts[2]; 

function App() {
  return <div>
    <Card name={contact1.name} imgURL={contact1.imgURL} phone={contact1.phone} email={contact1.email}/>
    <Card name={contact2.name} imgURL={contact2.imgURL} phone={contact2.phone} email={contact2.email}/>
    <Card name={contact3.name} imgURL={contact3.imgURL} phone={contact3.phone} email={contact3.email}/>
  </div>
}

export default App;