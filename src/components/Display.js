import React, { Component } from "react";
import Menu from "./Menu";
import Music from "./Music";
import Games from "./Games";
import Settings from "./Settings";
import Artists from "./Artists";
import Clock from "./Clock";
import NowPlaying from "./NowPlaying";
import styles from "../styles/Display.module.css";

export class Display extends Component {
  render() {
    const { currentItem, currentDisplay } = this.props;
    return (
      /* prettier-ignore */
      <div className={styles.display}>
        {currentDisplay === "Clock" ? <Clock /> : null}
        {currentDisplay === "Menu" ? <Menu currentItem={currentItem} title={"iPod Menu"} /> : null}
        {currentDisplay === "Music" ? <Music currentItem={currentItem} title= {"Music"} /> : null}
        {currentDisplay === "Games" ? <Games title={"Games"} /> : null}
        {currentDisplay === "Settings" ? <Settings  title={"Settings"}/> : null}
        {currentDisplay === "NowPlaying" ? <NowPlaying  title={"Now Playing"} audio={this.props.audio}/> : null}
        {currentDisplay === "Artists" ? <Artists  title={"Artists"} /> : null}
      </div>
    );
  }
}

export default Display;
