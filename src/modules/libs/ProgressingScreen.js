import React, { Component } from "react";

export default class ProgressingScreen extends Component {
  render() {
    return (
      <div class="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }
}
