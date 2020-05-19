import React from "react";
import LazyLoad from "react-lazyload";

const checkRole = role => {
  if (role === "1") {
    return <h2 className="sub_title  text-center">Chủ tịch</h2>;
  } else if (role === "2") {
    return <h2 className="sub_title  text-center">Phó chủ tịch</h2>;
  } else if (role === "3") {
    return <h2 className="sub_title  text-center">UV BTK</h2>;
  } else {
    return <h2 className="sub_title  text-center">UV BCH</h2>;
  }
};

const UnitMemberCard = ({ actions, item }) => {
  return (
    <div className="card-container">
      <div className="column">
        <div className="post-module">
          <LazyLoad height={200} offset={200} once>
            <div
              className="thumbnail"
              style={{
                background: `url(${
                  item.avatar
                    ? item.avatar
                    : process.env.PUBLIC_URL +
                      "/assets/Logo/logo_hsv_stroke_whitepng-min.png"
                }) center no-repeat`,
                backgroundSize: "cover"
              }}
              onClick={() => {
                actions.toggleModal("openMemberDetail");
                actions.handleMemberDetail(item);
              }}
            ></div>
          </LazyLoad>
          <div className="post-content">
            <p className="title">{item.name}</p>
            {checkRole(item.role)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnitMemberCard;
