import './Connect.scss';
import pdf from './ArteseResume.pdf';

function Connect() {
    return (
      <div className="ConnectContainer">
      <div className="ConnectTitle"></div>
      <div className="ConnectContents">
      <div className="aboutMe">
      <div className='meContainer'> <img src="images/Media/me.png" className='meImage' alt='Sara standing on beach with arms spread open.'/></div>
        <div className='infoBlock'> Hey there, my name is Sara! Over the past 4.5 years I have been working full-time for Helios Interactive doing all sorts of client projects but am now looking for a different opportunity to grow in. I am passionate about learning, creating, and solving problems. I can pick up neccessary skills fast with hands on experience. Send me a message with any questions or just to chat! </div>
        </div>
        <div className='socialLinks'>
        <a href="https://www.linkedin.com/in/saraartese/" target="_blank">Linkedin</a>
        <a href={pdf} target="_blank"> Resume </a>
        </div>
      </div>
    </div>
          );
  }
  
  export default Connect;