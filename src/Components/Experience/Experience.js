import "./Experience.scss";
import experienceJson from "../../experience.json";
import Display from "./Display";
import ModalDisplay from './ModalDisplay';
import React, { useState } from 'react';
import Modal from "react-modal";

Modal.setAppElement(document.getElementById("root"));

function Experience() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState();

  function openModal(e) {
    setSelectedProject(e);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="ExperienceContainer">
      <div className="ExperienceTitle"> Experience</div>
      <h1 className="jobTitle"> Helios Interactive </h1>
      <div className="ExperienceGrid">
        {experienceJson.map((data, index) => (
          <Display
            title={data.project}
            background={data.background}
            type={data.display}
            openModal={openModal}
            index={index}
            key={index}
          ></Display>
        ))}
      </div>
      {/* MODAL */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="Modal"
        overlayClassName="Overlay"
        contentLabel="Example Modal"
      >
        <button onClick={closeModal} className="CloseBtn">X</button>
        <ModalDisplay projectIndex={selectedProject}></ModalDisplay>
      </Modal>
    </div>
  );
}

export default Experience;
