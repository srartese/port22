import { useState } from 'react'
import NavBubble from "../NavBubble/NavBubble";
import BubbleCanvas from "../BubbleCanvas/BubbleCanvas";
import Experience from "../Experience/Experience";
import Projects from "../Projects/Projects";
import './Intro.scss';
import Connect from "../Connect/Connect";


function Intro() {
  const [selectedColor, setSelectedColor] = useState("white")

  function handleMouseEnterBubble(color) {
    setSelectedColor(color)
  }

  return (
    <div className="IntroContainer">
      <div className="NavContainer">
      <a href="#experience"> <NavBubble title="Experience" color="#26547c" onMouseEnter={handleMouseEnterBubble}></NavBubble></a>
        {/* <NavBubble title="Projects" color="#37515f" onMouseEnter={handleMouseEnterBubble}></NavBubble> */}
        <a href="#connect"><NavBubble title="Connect" color="#3b9a93" onMouseEnter={handleMouseEnterBubble}></NavBubble></a>
        <div>
  </div>
      </div>
      <BubbleCanvas selectedColor={selectedColor} ></BubbleCanvas>
      
      <div id="experience">
        <Experience>
      </Experience></div>
      {/* <Projects>
      </Projects> */}
     <div id="connect"> <Connect>
      </Connect></div>
    </div>
  );
}

export default Intro;