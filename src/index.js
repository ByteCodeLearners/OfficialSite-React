import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./styles/display.css";
import "./styles/aboutus.css";
import "./styles/icons.css";
import "./styles/upevents.css";
import "./styles/section2.css";
import "./styles/imgcard.css";
import "./styles/members_section.css";
import "./styles/responsive.css";
import "./styles/social_card.css";
import "./styles/contact_us.css";

ReactDOM.render(<App />, document.getElementById("root"));

// function shadow3d() {
//   var text = document.getElementById("text");
//   var shadow = "";
//   var shadow1 = "";
//   // for (let i = 0; i < 8; i++) {
//   //   shadow += (shadow ? "," : "") + -i * 1 + "px " + i * 1 + "px 0 #aaa69d";
//   // }
//   // text.style.textShadow = shadow;
//   var icons = document.getElementsByClassName("fab");
//   for (let i = 0; i < 5; i++) {
//     shadow1 += (shadow1 ? "," : "") + -i * 1 + "px " + i * 1 + "px 0 #aaa69d";
//   }
//   for (let i = 0; i < 4; i++) {
//     icons[i].style.textShadow = shadow1;
//   }
// }
// // shadow3d();
