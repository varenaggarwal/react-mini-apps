import React, { useState } from "react";
import "./styles.css";
import yesGif from "./assets/yes.gif";
import noGif from "./assets/no.gif";
import waitingGif from "./assets/waiting.gif";

export default function App() {
  const [birthday, setBirthday] = useState();
  const [luckyNumber, setLuckNumber] = useState(0);
  const [outputImage, setOutputImage] = useState(waitingGif);
  function isLucky() {
    console.log(birthday);
    console.log(luckyNumber);
    let birthdayObject = new Date(birthday);
    console.log(birthdayObject.getDate());
    let sumOfbirthday =
      birthdayObject.getFullYear() +
      birthdayObject.getDate() +
      birthdayObject.getMonth() +
      1;
    console.log(sumOfbirthday);
    if (sumOfbirthday % luckyNumber === 0) {
      setOutputImage(yesGif);
    } else {
      setOutputImage(noGif);
    }
  }
  return (
    <div className="App">
      <h2>Is your birthday lucky? Lets find out</h2>
      <label>Enter your Birthday:</label>
      <input
        placeholder="Enter your Birthday"
        id="birthday"
        type="Date"
        onChange={(event) => setBirthday(event.target.value)}
      ></input>
      <label>Enter your lucky number:</label>
      <input
        id="lukyNumber"
        type="number"
        onChange={(event) => setLuckNumber(event.target.value)}
      ></input>
      <button onClick={isLucky}>is your birthday lucky?</button>
      <div id="output">
        <img src={outputImage} alt="output" />
      </div>
    </div>
  );
}
