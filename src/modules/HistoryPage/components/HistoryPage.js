import React, { Component } from "react";
import Header from "../../common/Header/index";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
const params = {
  spaceBetween: 30,
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
};
const history = [
  "/assets/bg/luocsu.jpg",
  "/assets/bg/luocsu1.jpg",
  "/assets/bg/luocsu2.jpg",
  "/assets/bg/luocsu3.jpg",
  "/assets/bg/luocsu4.jpg",
  "/assets/bg/luocsu5.jpg",
  "/assets/bg/luocsu6.jpg",
  "/assets/bg/luocsu7.jpg"
];

class HistoryPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="hsv-union-container">
          <Swiper {...params}>
            {history.map(item => {
              return (
                <div className="hsv-union-history">
                  <img
                    src={process.env.PUBLIC_URL + item}
                    title="Hình ảnh lược sử"
                    alt="Hình ảnh lược sử"
                  />
                </div>
              );
            })}
          </Swiper>
        </div>
      </React.Fragment>
    );
  }
}

export default HistoryPage;
