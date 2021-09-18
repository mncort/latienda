import React from "react";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalTitle from "react-bootstrap/ModalTitle";
import { useUserContext } from '../context/UserContext';

export default function Modalito(props) {

    const {showModal} = useUserContext() 

    return (
      <Modal show={showModal}>
        <ModalHeader>
          <ModalTitle>{props.titulo}</ModalTitle>
        </ModalHeader>
        <ModalBody>{props.children}</ModalBody>
      </Modal>
    );    
  }