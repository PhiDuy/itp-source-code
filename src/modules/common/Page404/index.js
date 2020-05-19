import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

class Page404 extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="account-pages" />
        <div className="clearfix" />
        <div className="wrapper-page">
          <div className="ex-page-content text-center">
            <div className="text-error">404</div>
            <h3 className="text-uppercase font-600">Page not Found</h3>
            <p className="text-muted">
              It's looking like you may have taken a wrong turn. Don't worry...
              it happens to the best of us. You might want to check your
              internet connection. Here's a little tip that might help you get
              back on track.
            </p>
            <br />
            <Link className="btn btn-success waves-effect waves-light" to="/">
              {" "}
              Return Home
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Page404);
