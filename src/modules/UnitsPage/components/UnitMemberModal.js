import React, { Component } from "react";
import { Modal, ModalBody, Row, Col } from "reactstrap";
import LazyLoad from "react-lazyload";


const checkRole = role => {
  if (role === "1") {
    return <h4 className="text-orange">Chủ tịch</h4>;
  } else if (role === "2") {
    return <h4 className="text-orange">Phó chủ tịch</h4>;
  } else if (role === "3") {
    return <h4 className="text-orange">Uỷ viên Ban Thư Ký</h4>;
  } else {
    return <h4 className="text-orange">Uỷ viên Ban Chấp Hành</h4>;
  }
};
class UnitMemberModal extends Component {
  copyString = (inputId, tooltipId) => {
    var copyText = document.getElementById(inputId);
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");

    var tooltip = document.getElementById(tooltipId);
    tooltip.innerHTML = "Đã sao chép";
  };
  render() {
    const { curMember, toggleMemberDetail } = this.props;
    return (
      <Modal
        isOpen={toggleMemberDetail}
        toggle={() => this.props.actions.toggleModal("closeMemberDetail")}
        size="lg"
        modalClassName="modal-custom-member"
      >
        <ModalBody>
          <button
            type="button"
            className="close"
            aria-label="Close"
            onClick={() => this.props.actions.toggleModal("closeMemberDetail")}
          >
            <span aria-hidden="true">×</span>
          </button>
          <Row className="modal-custom-member-detail">
            <Col lg="5" md="12" sm="12">
              <div className="member-avatar">
                <LazyLoad height={200} offset={200} once>
                  <img
                    src={
                      curMember.avatar
                        ? curMember.avatar
                        : process.env.PUBLIC_URL +
                          "/assets/Logo/logo_hsv_stroke_whitepng-min.png"
                    }
                    alt={curMember.avatar}
                    title={curMember.avatar}
                  />
                </LazyLoad>
              </div>
            </Col>
            <Col lg="7" md="12" sm="12">
              <div className="member-info-container">
                <div className="member-info">
                  <h1>{curMember.name}</h1>
                  {checkRole(curMember.role)}
                  <div>
                    <p>
                      <span className="text-light-blue">MSSV:</span>&nbsp;
                      <span>
                        {curMember.studentId
                          ? curMember.studentId
                          : "Không có dữ liệu"}
                      </span>
                    </p>
                    <p>
                      <span className="text-light-blue">Khoa:</span>&nbsp;
                      <span>
                        {curMember.major ? curMember.major : "Không có dữ liệu"}
                      </span>
                    </p>
                    <p>
                      <span className="text-light-blue">Công việc:</span>&nbsp;
                      <span>
                        {curMember.jobs ? curMember.jobs : "Không có dữ liệu"}
                      </span>
                    </p>
                    <p>
                      <span className="text-light-blue">Điện thoại:</span>&nbsp;
                      <span>
                        {curMember.phone ? curMember.phone : "Không có dữ liệu"}
                      </span>
                    </p>
                    <p>
                      <span className="text-light-blue">Mạng xã hội:</span>
                      &nbsp;
                      <span className="d-flex">
                        <a
                          href={curMember.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="fs-24 btn-facebook"
                        >
                          <i className="mdi mdi-facebook-box"></i>
                        </a>
                        <span className="fs-24 btn-google g-tooltip">
                          <span className="tooltiptext" id="gmailLink">
                            {curMember.email}
                          </span>
                          <i className="mdi mdi-gmail"></i>
                        </span>
                      </span>
                    </p>
                  </div>
                </div>
                <hr />
                <div className="member-achievement">
                  <h1>Thành tích</h1>
                  <p>
                    {curMember.achievements
                      ? curMember.achievements
                      : "Không có dữ liệu"}
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
    );
  }
}

export default UnitMemberModal;
