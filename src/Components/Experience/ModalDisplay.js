import "./ModalDisplay.scss";
import experienceJson from "../../experience.json";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

function ModalDisplay({ projectIndex }) {
    const currentProject = experienceJson[projectIndex];

    const mainPhoto = 'images/prevImage/' + currentProject.mainimage;

    const images = currentProject.gallery.map((value) => {
      return {original: 'images/Media/' + value};
    });
    
    return (
        <div className='ModalInner'>
            <div className='bubbleFive'></div>
            <div className='bubbleOne'></div>
            <h1 className="title">{currentProject.project}</h1>
            <h2 className="type">{currentProject.type}</h2>
            <div className="mainDetails">
                <div className="mainImage"><img src={`${mainPhoto}`} alt="fish" className='photo'/></div>
                <div className="role"> 
                  <p className='roleTitle '> Role: </p>
                  <p className='roleList '> {currentProject.role} </p>
                </div>
                <div className="tools">
                  <p className='toolTitle '> Tools: </p>
                  <p className='toolList '> {currentProject.tools} </p>
                </div>
            </div>
            <div className='bubbleTwo'></div>
            <div className='bubbleFour'></div>
            <p className="description"> {currentProject.description}</p>
            <div className="galleryContainer">
                <div className="gallery">
                  <ImageGallery items={images} lazyLoad={true} showThumbnails={true} showPlayButton={false} />
                </div>
            </div>
            <div className='bubbleThree'></div>
        </div>
    );
}

export default ModalDisplay;