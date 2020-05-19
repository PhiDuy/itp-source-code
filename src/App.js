import React, { Component } from "react";
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router
} from "react-router-dom";
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";
import WrappedMenuContainer from "modules/WrappedMenu/components/WrappedMenuContainer";
import HomePageContainer from "modules/HomePage/components/HomePageContainer";
import UnitsPageContainer from "modules/UnitsPage/components/UnitsPageContainer";
import HistoryPageContainer from "modules/HistoryPage/components/HistoryPageContainer";

import Page404 from "modules/common/Page404/index.js";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NotificationContainer />
        <Router>
          <Switch>
            <Route path="/404" exact component={Page404} />
            <WrappedMenuContainer>
              <Route path="/" exact component={HomePageContainer} />
              <Route path="/unit" exact component={UnitsPageContainer} />
              <Route path="/history" exact component={HistoryPageContainer} />
            </WrappedMenuContainer>
            <Route
              path="*"
              render={props => {
                if (
                  !["/", "/history", "/unit"].includes(props.location.pathname)
                ) {
                  return <Redirect to="/404" from="*" />;
                }
              }}
            />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
