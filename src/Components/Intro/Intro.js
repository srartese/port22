import { useState } from 'react'
import NavBubble from "../NavBubble/NavBubble";
import BubbleCanvas from "../BubbleCanvas/BubbleCanvas";
import Experience from "../Experience/Experience";
import Footer from "../Footer/Footer";
import './Intro.scss';
import Connect from "../Connect/Connect";
import { TypeAnimation } from 'react-type-animation';

function Intro() {
  const [selectedColor, setSelectedColor] = useState("white")

  function handleMouseEnterBubble(color) {
    setSelectedColor(color)
  }

  return (
    <div className="IntroContainer">
      <div className="NavContainer">
      <div className='logoContainer'><img src='./logo.png' alt='logo of s dot a' /></div>
      <div className='name'>
        Sara Artese
      </div>
      <div className="animationContainer"><TypeAnimation
      sequence={[
        'Creative Developer', 
        1500, 
        'Technical Director',
        2000, 
        'Senior Developer', 
        2000,
        'Front-End Developer', 
        2000,
        'Open for work.',
        () => {
          console.log('Done typing!'); // Place optional callbacks anywhere in the array
        }
      ]}
      wrapper="animationDiv"
      cursor={true}
      repeat={0}
      style={{ fontSize: '2em', color:  '#E07A5F' }}
    />
    </div>
    <div className="navMenu">
      <a href="#experience"> <NavBubble title="Experience" color="#295b86" onMouseEnter={handleMouseEnterBubble}></NavBubble></a>
        {/* <NavBubble title="Projects" color="#37515f" onMouseEnter={handleMouseEnterBubble}></NavBubble> */}
        <a href="#connect"><NavBubble title="Connect" color="#2f9a97" onMouseEnter={handleMouseEnterBubble}></NavBubble></a>
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
      <Footer></Footer>
    </div>
  );
}

export default Intro;