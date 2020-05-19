import React from "react";
import moment from "moment";

const HistoryItem = ({ actions, item }) => {
  return (
    <div
      className="timeline-history__item timeline-history__item--active"
      data-text={item.title}
    >
      <div className="timeline__content">
        <img
          className="timeline__img"
          src={
            item.thumbnail ===
            "http://uit-backend.70hsv.tk/uploads/defaultBackground.png"
              ? process.env.PUBLIC_URL + "/assets/Logo/logo_hsv_stroke_whitepng-min.png"
              : item.thumbnail
          }
          alt="name"
        />
        <h3 className="timeline__content-title">
          {moment(item.time).format("DD/MM/YYYY")}
        </h3>
        <span
          className="btn btn-blue timeline__content-more"
          onClick={() => {
            actions.toggleModal();
            actions.handleCurPost(item);
          }}
        >
          Chi tiết
        </span>
      </div>
    </div>
  );
};

export default HistoryItem;
