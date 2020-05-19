import React, { Component } from "react";
import HistoryItem from "./HistoryItem";
import LoadingScreen from "../../libs/LoadingScreen";
import classnames from "classnames";
import _ from "lodash";
import $ from "jquery";

class HistoryTimeline extends Component {
  componentDidMount() {
    window.addEventListener("scroll", function() {
      var element = document.getElementById("timeline-history__navbar");
      if (element !== null) {
        if (window.scrollY > 500) {
          element.classList.add("active");
        } else {
          element.classList.remove("active");
        }
      }
    });
  }

  componentDidUpdate(prevProps) {
    const { isGetPostsSuccess, curYear, isGetPostsOnNavbar } = this.props;
    if (
      prevProps.isGetPostsSuccess !== isGetPostsSuccess &&
      isGetPostsSuccess
    ) {
      window.$("#timeline-1").timeline();
      this.props.actions.handleClear("posts");
    }
    if (prevProps.curYear !== curYear && isGetPostsOnNavbar) {
      this.props.actions.getPostsByYear({
        time: curYear.value,
        page: 0
      });
      this.props.actions.handleClear("generateYear");
    }
  }
  _handleScrollTo = () => {
    $("html, body").animate(
      {
        scrollTop: $("#timeline-1").offset().top
      },
      1500
    );
  };

  _handlePageChange = () => {
    const { curYear, curPage } = this.props;
    let nextPage = curPage + 1;
    this.props.actions.handlePageChange(nextPage);
    this.props.actions.getPostsByYear({
      time: curYear.value,
      page: nextPage
    });
  };

  _handleChangeOnNav = type => {
    const { curYear } = this.props;
    this._handleScrollTo();
    this.props.actions.handleCurYear({
      type,
      data: curYear
    });
  };

  render() {
    const {
      posts,
      isProgressing,
      isGettingMorePost,
      maxQuantity,
      curYear,
      isCanPrevStage,
      isCanNextStage
    } = this.props;
    return (
      <React.Fragment>
        <div className="timeline-container" id="timeline-1">
          <div
            id="timeline-history__navbar"
            className="timeline-history__navbar"
          >
            <span
              className={classnames("navbar__left", {
                "cursor-not-allowed": isCanPrevStage === false
              })}
              onClick={() => this._handleChangeOnNav("prev")}
            >
              <i className="mdi mdi-chevron-left"></i>
            </span>
            <span className="navbar__info">{curYear.label}</span>
            <span
              className={classnames("navbar__right", {
                "cursor-not-allowed": isCanNextStage === false
              })}
              onClick={() => this._handleChangeOnNav("next")}
            >
              <i className="mdi mdi-chevron-right"></i>
            </span>
          </div>
          <div className="timeline-header">
            <h2 className="timeline-header__title">Sự kiện nổi bật</h2>
            {!_.isEmpty(curYear) && (
              <h3 className="timeline-header__subtitle">Năm {curYear.label}</h3>
            )}
          </div>
          {isProgressing ? (
            <div className="timeline-loading-container">
              <LoadingScreen />
            </div>
          ) : (
            <div className="timeline">
              {_.isEmpty(posts) ? (
                <div className="text-center">
                  <p className="timeline-empty">Chưa có dữ liệu !</p>
                </div>
              ) : (
                posts.map((item, index) => {
                  return (
                    <HistoryItem
                      key={index}
                      item={item}
                      actions={this.props.actions}
                    />
                  );
                })
              )}
              <div className="text-center">
                {posts.length < maxQuantity && (
                  <span
                    className="btn btn-blue timeline__content-more text-center"
                    onClick={this._handlePageChange}
                  >
                    {isGettingMorePost ? (
                      <i class="fas fa-spinner"></i>
                    ) : (
                      "Xem thêm"
                    )}
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default HistoryTimeline;
