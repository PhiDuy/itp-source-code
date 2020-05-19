import React, { Component } from "react";
import Header from "../../common/Header/index";
import UnitTabBar from "./UnitTabBar";
import UnitFamilyTree from "./UnitFamilyTree";
import UnitIntroduce from "./UnitIntroduce";

class UnitsPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.actions.getIntroduce();
    this.props.actions.getAllTermsOfUnit();
  }

  render() {
    const { activedTab } = this.props;
    return (
      <React.Fragment>
        <Header />
        <UnitTabBar {...this.props} />
        {activedTab === "1" && <UnitIntroduce {...this.props} />}
        {activedTab === "2" && <UnitFamilyTree {...this.props} />}
      </React.Fragment>
    );
  }
}

export default UnitsPage;
