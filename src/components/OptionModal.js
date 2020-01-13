import React from "react";
import Modal from "react-modal";

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    ariaHideApp={false}
    onRequestClose={props.handleClearSelectedOption}
    contentLabel="Selected Option"
    className="modal"
  >
    <h3 className="modal__title">Selected</h3>
    {props.selectedOption && (
      <p className="modal__body">{props.selectedOption}</p>
    )}
    <button className="button Okey" onClick={props.handleClearSelectedOption}>
      Okay
    </button>
  </Modal>
);

//Modal.setAppElement(OptionModal);

export default OptionModal;
