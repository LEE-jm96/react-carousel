import React from "react";

import { Toast } from "react-bootstrap";

import ToastContainer from "./DogToast.styled";
import { dog } from "../../types/dog";

type DogToastTypes = {
  selectedDog: dog | undefined;
  closeToast: () => void;
};

const DogToast = ({ selectedDog, closeToast }: DogToastTypes) => {
  return (
    <ToastContainer>
      <Toast onClick={closeToast}>
        <Toast.Header role="alert" aria-live="assertive" aria-atomic="true">
          <strong className="me-auto">{selectedDog && selectedDog.name}</strong>
          <small>1 mins ago</small>
        </Toast.Header>
        <Toast.Body>{selectedDog && selectedDog.message}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default DogToast;
