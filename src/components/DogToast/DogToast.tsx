import { Toast } from "react-bootstrap";

import ToastContainer from "./DogToast.styled";
import { dog } from "../../types/dog";

type DogToastPropsTypes = {
  selectedDog: dog;
  closeToast: () => void;
};

const DogToast = ({ selectedDog, closeToast }: DogToastPropsTypes) => {
  return (
    <ToastContainer>
      <Toast onClick={closeToast}>
        <Toast.Header role="alert" aria-live="assertive" aria-atomic="true">
          <strong className="me-auto">{selectedDog.name}</strong>
          <small>{selectedDog.minute} mins ago</small>
        </Toast.Header>
        <Toast.Body>{selectedDog.message}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default DogToast;
