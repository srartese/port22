import { useState } from 'react'
import NavBubble from "../NavBubble/NavBubble";
import BubbleCanvas from "../BubbleCanvas/BubbleCanvas";
import Experience from "../Experience/Experience";
import Projects from "../Projects/Projects";
import './Intro.css';
import Connect from "../Connect/Connect";


function Intro() {
  const [selectedColor, setSelectedColor] = useState("white")

  function handleMouseEnterBubble(color) {
    setSelectedColor(color)
  }

  return (
    <div className="IntroContainer">
      <div className="NavContainer">
        <NavBubble title="Experience" color="#26547c" onMouseEnter={handleMouseEnterBubble}></NavBubble>
        <NavBubble title="Projects" color="#37515f" onMouseEnter={handleMouseEnterBubble}></NavBubble>
        <NavBubble title="Connect" color="#3b9a93" onMouseEnter={handleMouseEnterBubble}></NavBubble>
      </div>
      <BubbleCanvas selectedColor={selectedColor} ></BubbleCanvas>
      
      <Experience>
      </Experience>
      <Projects>
      </Projects>
      <Connect>
      </Connect>
    </div>
  );
}

export default Intro;