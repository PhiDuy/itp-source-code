import React, { Component } from "react";
import Sidebar from "./Sidebar";
import ReactGA from 'react-ga';

ReactGA.initialize('UA-155890583-1');


class WrappedMenu extends Component {
  
  componentDidUpdate() {
    ReactGA.pageview(this.props.location.pathname + this.props.location.search);
  }

  render() {
    return (
      <React.Fragment>
        <Sidebar {...this.props} />
        <div className="wrapper-container">
          <div id="content">{this.props.children}</div>
        </div>

        <footer>
          <div className="bottom-logo">
            <img
              src={
                process.env.PUBLIC_URL +
                "/assets/Logo/240px-Huy_hiệu_Hội_sinh_viên_Việt_Nam.png"
              }
              alt="Hội Sinh viên Việt Nam TP. Hồ Chí Minh"
            />
          </div>
          <div className="footer-item footer-developer">
            <p className="text-uppercase">
              SẢN PHẨM CỦA HỘI SINH TRƯỜNG ĐẠI HỌC CÔNG NGHỆ THÔNG TIN - ĐHQG-HCM
            </p>
          </div>
          <div className="footer-item footer-contact">
            <p>
              <span>Địa chỉ:</span> Khu phố 6, P.Linh Trung, Q.Thủ Đức, TP.HCM 
            </p>
            <p>
              <span>Số điện thoại:</span> (08) 3603 0862
            </p>
            <p>
              <span>Liên hệ:</span> hoisinhvien@uit.edu.vn
            </p>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default WrappedMenu;
