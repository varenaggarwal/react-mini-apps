import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [birthday, setBirthday] = useState();
  const [luckyNumber, setLuckNumber] = useState(0);

  function isLucky() {
    console.log(birthday);
    console.log(luckyNumber);
  }
  return (
    <div className="App">
      <input
        id="lukyNumber"
        type="Date"
        onChange={(event) => setLuckNumber(event.target.value)}
      ></input>
      <input
        id="birthday"
        type="number"
        onChange={(event) => setBirthday(event.target.value)}
      ></input>
      <button onClick={isLucky}>is your birthday lucky?</button>
      <div id="output"></div>
    </div>
  );
}
