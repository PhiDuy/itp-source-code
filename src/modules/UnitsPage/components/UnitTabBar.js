import React, { Component } from "react";
import _ from "lodash";
import classnames from "classnames";

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
  }
};

class UnitTabBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    };
  }
  componentWillUnmount() {
    this.setState({
      toggle: false
    });
  }

  componentDidMount() {
    this.setState({
      toggle: false
    });
  }

  onToggle = () => {
    this.setState({
      toggle: !this.state.toggle
    });
  };

  _handleGetStructure = item => {
    this.onToggle();
    const userId = this.props.match.params.userId;
    this.props.actions.handleTabChange("2");
    this.props.actions.getStructureByTerm({
      term: item.term,
      userId
    });
  };

  render() {
    const { toggle } = this.state;
    const { terms, activedTab, curStructure } = this.props;
    return (
      <div className="unit-navbar">
        <ul className="main-tab">
          <li
            className={classnames("main-tab-item", {
              active: activedTab === "1"
            })}
            onClick={() => this.props.actions.handleTabChange("1")}
          >
            <span className="main-label-item">Tổng quan</span>
          </li>
          <li
            className={classnames("main-tab-item sub-tab", {
              active: activedTab === "2"
            })}
          >
            <span className="main-label-item" onClick={this.onToggle}>
              Nhiệm kì
            </span>
            <ul className={toggle ? "sub-tab-menu sub-active" : "sub-tab-menu"}>
              {_.isEmpty(terms) ? (
                <li>
                  <span>Không có dữ liệu nhiệm kì</span>
                </li>
              ) : (
                terms.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className={
                        curStructure.term === item.term
                          ? "sub-tab-item-active"
                          : ""
                      }
                    >
                      <span onClick={() => this._handleGetStructure(item)}>
                        Nhiệm kì {checkTerm(item.term)}
                      </span>
                    </li>
                  );
                })
              )}
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

export default UnitTabBar;
