import React, { useState } from "react";

function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString())

  setInterval(() => setTime((new Date()).toLocaleTimeString()), 1000);

  return (
    <div className="container">
      <h1>{time}</h1>
      <button>Time</button>
    </div>
  );
}

export default App;
