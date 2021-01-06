import React, { Component } from "react";
import Display from "./Display";
import Control from "./controls/Control";

export class IpodBody extends Component {
  render() {
    return (
      <div className="ipodBody flex">
        <Display />
        <Control />
      </div>
    );
  }
}

export default IpodBody;
