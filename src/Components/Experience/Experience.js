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
          <Display
            title={data.project}
            background="#ccffaa"
            type={data.display}
            openModal={openModal}
          ></Display>
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
        <h1>Title</h1>
        <h2>project type</h2>
        <div> Media </div>
        <div> Role</div>
        <div> tools</div>
      </Modal>
    </div>
  );
}

export default Experience;
