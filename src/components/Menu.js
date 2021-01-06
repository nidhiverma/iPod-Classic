import React, { Component } from "react";

export class Menu extends Component {
  render() {
    return (
      <div id="menu">
        <h3 id="screen-title">iPod Menu</h3>
        <ul>
          <li className="menu-item selected">
            <span>Cover Flow </span>
            <i class="fas fa-chevron-right"></i>
          </li>
          <li className="menu-item">
            <span>Music </span>
            <i class="fas fa-chevron-right"></i>
          </li>
          <li className="menu-item">
            <span>Games </span>
            <i class="fas fa-chevron-right"></i>
          </li>
          <li className="menu-item">
            <span>Settings </span>
            <i class="fas fa-chevron-right"></i>
          </li>
        </ul>
      </div>
    );
  }
}

export default Menu;
