import React, { Component } from "react";
import { Row, Col, Container } from "reactstrap";
// import UnitTabBar from "./UnitTabBar";
import UnitMemberCard from "./UnitMemberCard";
import UnitMemberModal from "./UnitMemberModal";
import _ from "lodash";
import LoadingScreen from "../../libs/LoadingScreen";

const Header = (term, time) => {
  return (
    <div className="unit-tile text-center">
      <h3>Đại học Công Nghệ Thông Tin - Đại học Quốc Gia TP.HCM</h3>
      <hr />
      <p>Ban chấp hành Hội Sinh Viên trường</p>
      <span>
        Nhiệm kì {checkTerm(term)} ({time.beginAt} - {time.endAt})
      </span>
    </div>
  );
};

const checkTerm = term => {
  if (term === 1) {
    return <span>&#8544;</span>;
  } else if (term === 2) {
    return <span>&#8545;</span>;
  } else if (term === 3) {
    return <span>&#8546;</span>;
  } else if (term === 4) {
    return <span>&#8547;</span>;
  } else if (term === 5) {
    return <span>&#8548;</span>;
  } else if (term === 6) {
    return <span>&#8549;</span>;
  } else if (term === 7) {
    return <span>&#8550;</span>;
  } else if (term === 8) {
    return <span>&#8551;</span>;
  } else if (term === 9) {
    return <span>&#8552;</span>;
  } else if (term === 10) {
    return <span>&#8553;</span>;
  } else if (term === 11) {
    return <span>&#8554;</span>;
  } else if (term === 12) {
    return <span>&#8555;</span>;
  } else if (term === 13) {
    return <span>&#8556;</span>;
  } else if (term === 14) {
    return <span>&#8557;</span>;
  } else if (term === 15) {
    return <span>&#8558;</span>;
  } else if (term === 16) {
    return <span>&#8559;</span>;
  } else if (term === 17) {
    return <span>&#8560;</span>;
  } else if (term === 18) {
    return <span>&#8561;</span>;
  } else if (term === 19) {
    return <span>&#8562;</span>;
  } else if (term === 20) {
    return <span>&#8563;</span>;
  }
};

class UnitFamilyTree extends Component {
  render() {
    const {
      curStructure,
      isGettingStructure,
      memTypeOne,
      memTypeTwo,
      memTypeThree,
      memTypeFour
    } = this.props;
    const members = curStructure.members;
    return (
      <React.Fragment>
        <section className="unit-leadership-container">
          <Row className="mr-auto ml-auto">
            <Col lg="12" md="12" sm="12">
              <Container>
                {isGettingStructure ? (
                  <LoadingScreen />
                ) : _.isEmpty(members) ? (
                  <div className="family-tree-container">
                    {Header(curStructure.term, curStructure.time)}
                    <p>Chưa có dữ liệu ban chấp hành về nhiệm kì này !</p>
                  </div>
                ) : (
                  <div className="family-tree-container">
                    {Header(curStructure.term, curStructure.time)}
                    <div className="family-list-childs">
                      {!_.isEmpty(memTypeOne) &&
                        memTypeOne.map((item, index) => {
                          return (
                            <UnitMemberCard
                              key={index}
                              item={item}
                              actions={this.props.actions}
                            />
                          );
                        })}
                    </div>
                    <div className="family-list-childs">
                      {!_.isEmpty(memTypeTwo) &&
                        memTypeTwo.map((item, index) => {
                          return (
                            <UnitMemberCard
                              key={index}
                              item={item}
                              actions={this.props.actions}
                            />
                          );
                        })}
                    </div>
                    <div className="family-list-childs">
                      {!_.isEmpty(memTypeThree) &&
                        memTypeThree.map((item, index) => {
                          return (
                            <UnitMemberCard
                              key={index}
                              item={item}
                              actions={this.props.actions}
                            />
                          );
                        })}
                    </div>
                    <div className="family-list-childs">
                      {!_.isEmpty(memTypeFour) &&
                        memTypeFour.map((item, index) => {
                          return (
                            <UnitMemberCard
                              key={index}
                              item={item}
                              actions={this.props.actions}
                            />
                          );
                        })}
                    </div>
                  </div>
                )}
              </Container>
            </Col>
          </Row>
        </section>
        <UnitMemberModal {...this.props} />
      </React.Fragment>
    );
  }
}

export default UnitFamilyTree;
