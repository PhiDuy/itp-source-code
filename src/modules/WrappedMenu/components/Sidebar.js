import React, { Component } from "react";
import { Link } from "react-router-dom";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleMenu: false,
      toggleSubmenu: false
    };
  }
  componentDidMount() {
    this.setState({
      toggleMenu: false,
      toggleSubmenu: false
    });
  }
  componentDidUpdate(prevState) {
    this.state.toggleMenu
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }

  onToggleSubMenu = () => {
    this.setState({
      toggleSubmenu: !this.state.toggleSubmenu
    });
    this.props.actions.handleClear();
  };

  onToggle = () => {
    this.setState({
      toggleMenu: !this.state.toggleMenu
    });
  };

  onClose = () => {
    this.setState({
      toggleMenu: false
    });
  };

  render() {
    const { toggleMenu } = this.state;
    return (
      <div id="menu-container" className={toggleMenu ? "active" : ""}>
        <div className={toggleMenu ? "menu toggle" : "menu"}>
          <img
            src={process.env.PUBLIC_URL + "/assets/Logo/70years.png"}
            title="Kỉ niệm 70 năm ngày truyền thống"
            alt="Kỉ niệm 70 năm ngày truyền thống"
          />
          <label className="menu-toggle" htmlFor="menu" onClick={this.onToggle}>
            <span>Toggle</span>
          </label>
          <ul className="main-menu-item">
            <li className="menu-item">
              <Link to="/" onClick={this.onClose}>
                <i className="mdi mdi-home-outline text-light-blue fs-24"></i>
                &nbsp; Lược sử HSV UIT
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/history" onClick={this.onClose}>
                <i className="mdi mdi-history text-light-blue fs-24"></i>
                &nbsp; Lược sử HSV Việt Nam
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/unit" onClick={this.onClose}>
                <i className="mdi mdi-account-group fs-24 text-light-blue"></i>
                &nbsp; Ban chấp hành HSV UIT
              </Link>
            </li>
          </ul>
          <div className="footer-logo text-center">
            <img
              src={process.env.PUBLIC_URL + "/assets/Logo/70years.png"}
              title="Kỉ niệm 70 năm ngày truyền thống"
              alt="Kỉ niệm 70 năm ngày truyền thống"
            />
            <img
              src={process.env.PUBLIC_URL + "/assets/Logo/120px_logo_hsv.png"}
              title="Hội sinh viên Việt Nam"
              alt="Kỉ niệm 70 năm ngày truyền thống"
            />
          </div>
        </div>
        <div className="fade-backdrop"></div>
      </div>
    );
  }
}

export default Sidebar;
