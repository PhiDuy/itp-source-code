import React, { Component } from "react";
import { Col } from "reactstrap";
import _ from "lodash";
import LoadingScreen from "../../libs/LoadingScreen";

class UnitIntroduce extends Component {
  render() {
    const { introduce, isGettingIntroduce } = this.props;
    const content = _.get(introduce, "content", "");
    return (
      <React.Fragment>
        <section className="posts-container">
          {isGettingIntroduce ? (
            <LoadingScreen />
          ) : (
            <Col lg="8" md="12" sm="12" className="mr-auto ml-auto">
              <div className="posts-title">
                <h2>Tổng quan</h2>
                <h5 className="text-light-blue">{introduce.name}</h5>
              </div>
              <div className="posts-content">
                {_.isEmpty(content) ? (
                  <div className="text-center">
                    <p className="fs-24">
                      Hiện tại chưa có dữ liệu về bài thiệu của đơn vị này !
                    </p>
                  </div>
                ) : (
                  <div className="ql-editor">
                    <div
                      className="ql-custom"
                      dangerouslySetInnerHTML={{ __html: content }}
                    ></div>
                  </div>
                )}
              </div>
            </Col>
          )}
        </section>
      </React.Fragment>
    );
  }
}

export default UnitIntroduce;
