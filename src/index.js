import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./styles/display.css";
import "./styles/aboutus.css";
import "./styles/icons.css";
import "./styles/upevents.css";
import "./styles/section2.css";

ReactDOM.render(<App />, document.getElementById("root"));
const createSpan = () => {
  for (let i = 0; i < 2050; i++) {
    let span = document.createElement("span");
    document.querySelector(".container").appendChild(span);
  }
};
function shadow3d() {
  var text = document.getElementById("text");
  var shadow = "";
  var shadow1 = "";
  for (let i = 0; i < 15; i++) {
    shadow += (shadow ? "," : "") + -i * 1 + "px " + i * 1 + "px 0 #aaa69d";
  }
  text.style.textShadow = shadow;
  var icons = document.getElementsByClassName("fab");
  for (let i = 0; i < 6; i++) {
    shadow1 += (shadow1 ? "," : "") + -i * 1 + "px " + i * 1 + "px 0 #aaa69d";
  }
  for (let i = 0; i < icons.length; i++) {
    icons[i].style.textShadow = shadow1;
  }
}
shadow3d();
// createSpan();
