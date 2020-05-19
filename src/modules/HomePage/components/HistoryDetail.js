import React, { Component } from "react";
import { Modal, ModalBody } from "reactstrap";
import moment from "moment";

class HistoryDetail extends Component {
  render() {
    const { toggleModal, curPost } = this.props;
    return (
      <Modal
        isOpen={toggleModal}
        toggle={() => this.props.actions.toggleModal()}
        size="xl"
      >
        <ModalBody>
          <div className="timeline-post-header">
            <button
              type="button"
              className="close"
              aria-label="Close"
              onClick={() => this.props.actions.toggleModal()}
            >
              <span aria-hidden="true">×</span>
            </button>
            <h2 className="text-light-blue">{curPost.title}</h2>
            <p>{moment(curPost.time).format("DD/MM/YYYY")}</p>
          </div>
          <div className="ql-editor">
            <div
              className="ql-custom"
              dangerouslySetInnerHTML={{ __html: curPost.content }}
            ></div>
          </div>
        </ModalBody>
      </Modal>
    );
  }
}

export default HistoryDetail;
