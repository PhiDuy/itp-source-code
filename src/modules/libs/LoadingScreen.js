import React, { Component } from "react";
import { Col } from "reactstrap";

export default class LoadingScreen extends Component {
  render() {
    return (
      <Col
        lg="12"
        className="text-center"
        style={{
          margin: "20px 0",
          height: "50vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div className="lds-grid">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </Col>
    );
  }
}
