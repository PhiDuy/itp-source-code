import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="branding text-center">
        <div className="logo">
          <img src={process.env.PUBLIC_URL + '/assets/Logo/Logo 70 nam FINAL-01-min.png'} alt="Kỉ niệm 70 năm ngày truyền thống" />
        </div>
        <div className="text-center branding-title">
          Kỉ niệm 10 năm Hội sinh viên Đại Học Công Nghệ Thông Tin - ĐHQG-Tp.HCM
        </div>
      </div>
    );
  }
}

export default Header;
