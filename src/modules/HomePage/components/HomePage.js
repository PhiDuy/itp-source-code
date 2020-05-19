import React, { Component } from "react";
import HistoryTimeline from "./HistoryTimeline";
import HistoryDetail from "./HistoryDetail";
import HistoryTimelineMobile from "./HistoryTimelineMobile";
import HistoryStoneBar from "./HistoryStoneBar";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenWidth: window.innerWidth
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.actions.getBackground();
    window.addEventListener("resize", this.updateWindowDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ screenWidth: window.innerWidth });
  };

  render() {
    const { pcBackground, mobileBackground } = this.props;
    const { screenWidth } = this.state;
    return (
      <React.Fragment>
        <section
          className="about-container"
          style={{
            background: `url(${pcBackground}) no-repeat center center fixed`
          }}
        ></section>
        <section className="about-container-moblie">
          <img
            src={mobileBackground}
            alt="bg-mobile"
            className="vertical-image-mobile"
          />
          <img
            src={pcBackground}
            alt="bg-mobile"
            className="horizontal-image-mobile"
          />
        </section>
        <section>
          <HistoryStoneBar {...this.props} />
          {screenWidth < 991 ? (
            <HistoryTimelineMobile {...this.props} />
          ) : (
            <HistoryTimeline {...this.props} />
          )}
        </section>
        <HistoryDetail {...this.props} />
      </React.Fragment>
    );
  }
}

export default HomePage;
