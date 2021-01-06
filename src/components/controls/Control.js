import React, { Component } from "react";
import Wheel from "./Wheel";
import MenuButton from "./MenuButton";

export class Control extends Component {
  render() {
    return (
      <div className="controls">
        <Wheel />
        <MenuButton />
        <div className="actions" id="menu">
          Menu
        </div>
        <div className="actions" id="forward">
          <i class="fas fa-fast-forward"></i>
        </div>
        <div className="actions" id="backward">
          <i class="fas fa-fast-backward"></i>
        </div>
        <div className="actions" id="play-pause">
          <i style={{ marginRight: "5px" }} class="fas fa-pause"></i>
          <i class="fas fa-play"></i>
        </div>
      </div>
    );
  }
}

export default Control;
