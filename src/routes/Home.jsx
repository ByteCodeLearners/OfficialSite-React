import React, { useEffect } from "react";
import Section2 from "../components/Section2";
import Members from "../components/Members";
import Display from "../components/Display";
import { sticky } from "../components/Navbar";
import GlimpseOfGallery from "../components/GlimpseOfGallery";

const Home = () => {
  useEffect(() => {
    sticky();
    var container = document.getElementsByClassName("display")[0];
    const createBubble = () => {
      var bub = document.createElement("span");
      bub.classList.add("bubble");
      var size = Math.random() * 90;
      bub.style.width = size + "px";
      bub.style.height = size + "px";
      if (window.screen.width > 650) {
        bub.style.left = Math.random() * 90 + "vw";
      } else {
        bub.style.left = Math.random() * 50 + "vw";
        bub.style.transformOrigin = "0px";
      }
      if (container) {
        container.appendChild(bub);
        setTimeout(() => {
          bub.remove();
        }, 4000);
      }
    };
    if (window.screen.width > 650) {
      setInterval(createBubble, 350);
    } else {
      setInterval(createBubble, 2000);
    }
  }, []);
  return (
    <div className="home">
      <Display />
      <Section2 />
      <Members />
      <GlimpseOfGallery />
    </div>
  );
};

export default Home;
