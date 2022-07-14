import "./ModalDisplay.scss";
import experienceJson from "../../experience.json";

function ModalDisplay({ projectIndex }) {
    const currentProject = experienceJson[projectIndex];
    return (
        <div className='ModalInner'>
        <h1 className="title">{currentProject.project}</h1>
        <h2 className="type">{currentProject.type}</h2>
        <div className="mainImage"> <img src="https://picsum.photos/550/350" /></div>
        <div className="role"> {currentProject.role}</div>
        <div className="tools"> {currentProject.tools}</div>
        </div>
    );
}

export default ModalDisplay;
