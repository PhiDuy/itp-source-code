import React from "react";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

const ModalStageDelConfirm = ({
  props,
  isToggle,
  title,
  handleDel,
  handleToggle
}) => {
  return (
    <Modal isOpen={isToggle} toggle={handleToggle} centered>
      <ModalBody>
        <div className="text-center">
          <i className="mdi mdi-alert-decagram fs-50 text-danger" />
          <p>{title}</p>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button color="danger" onClick={handleDel}>
          Xoá
        </Button>
        <Button color="secondary" onClick={handleToggle}>
          Huỷ
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ModalStageDelConfirm;
