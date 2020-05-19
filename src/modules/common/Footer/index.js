import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Container } from "reactstrap";

class Footer extends Component {
  render() {
    return (
      <footer style={{bottom:"0px", marginTop: "1rem"}}>
        <div className="bottom-line">
          <span>
            © 2019 VĂN PHÒNG ĐOÀN - HỘI TRƯỜNG ĐẠI HỌC CÔNG NGHỆ THÔNG TIN.
          </span>
          <a href="#scrollup" className="scrollup" title="">
            <i className="la la-arrow-up" />
          </a>
        </div>
      </footer>
    );
  }
}

export default withRouter(Footer);
