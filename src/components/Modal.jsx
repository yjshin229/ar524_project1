import React from "react";
import Modal from "react-modal";

const CustomModal = ({ modalIsOpen, afterOpenModal, closeModal, children }) => {
  const customStyles = {
    content: {
      display: "flex",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "black",
      opacity: "100%",
      color: "white",
      border: "2px solid white",
      height: "20em",
    },
    overlay: {
      backgroundColor: "rgb(100,100,100,0.5)",
    },
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel={"Example Modal"}
    >
      {children}
    </Modal>
  );
};

export default CustomModal;
