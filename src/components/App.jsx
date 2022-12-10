import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: '',
    lName: ''
  });

  function handleChange(e) {
    const { value, name } = e.target;

    setFullName((prevValue) => {
      if (name === 'fName') {
        return {
          fName: value,
          lName: prevValue.lName
        }
      }

      return {
        fName: prevValue.fName,
        lName: value
      }
    });
  }

  function handleClick(e) {
    e.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {fullName.fName} {fullName.lName}</h1>
      <form>
        <input name="fName" placeholder="First Name" onChange={handleChange} />
        <input name="lName" placeholder="Last Name" onChange={handleChange} />
        <button onClick={handleClick}>Submit</button>
      </form>
    </div>
  );
}

export default App;
