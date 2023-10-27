import './Connect.scss';
import pdf from './ArteseResume.pdf';

function Connect() {
    return (
      <div className="ConnectContainer">
      <div className="ConnectTitle"></div>
      <div className="ConnectContents">
      <div className="aboutMe">
      <div className='meContainer'> <img src="images/Media/me.png" className='meImage' alt='Sara standing on beach with arms spread open.'/></div>
        <div className='infoBlock'> Hello! I'm Sara, and my journey over the last 5+ years has led me through a diverse range of projects, including agency work and contributing to open-source humanitarian software. I'm now actively seeking new opportunities to further expand my skill set and create a positive impact.
        <br />
        <br />
        My passion lies in continuous learning, creative problem-solving, and leveraging my skills to make a difference. I thrive in hands-on learning environments and have a proven ability to swiftly acquire new skills.
       
        Whether you have questions or just want to have a chat, feel free to send me a message. Let's connect and explore how we can collaborate for a brighter future! </div>
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