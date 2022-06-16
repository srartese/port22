import "./Experience.scss";
import experienceJson from "../../experience.json";
import Display from "./Display";
import React from "react";
import Modal from "react-modal";

Modal.setAppElement(document.getElementById("root"));

function Experience() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="ExperienceContainer">
      <div className="ExperienceTitle"> Experience</div>
      <p> Helios Interactive </p>
      <div className="ExperienceGrid">
        {experienceJson.map((data) => (
          // <button onClick={openxModal} className="ExperienceButton">
          <Display
            title={data.project}
            background="#ccffaa"
            type={data.display}
          ></Display>
          // </button>
        ))}
      </div>
      {/* MODAL */}
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        className="Modal"
        overlayClassName="Overlay"
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <p> Content would go here</p>
        </form>
      </Modal>
    </div>
  );
}

export default Experience;
