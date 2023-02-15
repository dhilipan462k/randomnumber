// Create a react app from scratch.
// It should display a h1 heading.
// It should display an unordered list (bullet points).
// It should contain 3 list elements.
import React from "react";
import ReactDOM from "react-dom";
const fName = "Dhilipan";
const lName = "S P";
const num = 7;

ReactDOM.render(
  <div>
    <h1>Hii {fName + " " + lName}</h1>
    <p>Your lucky number is {Math.floor(Math.random() * 10)}</p>
  </div>,
  document.getElementById("root")
);
