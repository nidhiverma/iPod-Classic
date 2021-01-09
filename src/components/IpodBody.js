import React, { Component } from "react";
import Display from "./Display";
import ZingTouch from "zingtouch";
import song from "../audio/Birds.mp3";

export class IpodBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentItem: "Clock",
      currentDisplay: "Menu",
      audio: {},
      isPlaying: true,
    };
  }

  rotateEventHandler = () => {
    let controller = document.getElementById("controller");
    let region = new ZingTouch.Region(controller);
    region.bind(controller, "rotate", (e) => {
      let currentAngle = Math.floor(e.detail.angle) % 60;

      console.log("CurrentAngle: ", currentAngle);
      const menuItems = ["Clock", "Music", "Games", "Settings"];
      const musicItems = ["NowPlaying", "Artists"];

      if (this.state.currentDisplay === "Menu") {
        this.setState({
          currentItem: menuItems[Math.floor(currentAngle / 15)],
        });
      } else if (this.state.currentDisplay === "Music") {
        this.setState({
          currentItem: musicItems[Math.floor(currentAngle / 30)],
        });
      }
    });
  };

  changeDisplayHandler = () => {
    const { currentItem } = this.state;
    if (currentItem === "Music") {
      this.setState({
        currentItem: "NowPlaying",
        currentDisplay: currentItem,
      });
    } else if (currentItem === "NowPlaying") {
      this.setState({
        currentItem: "NowPlaying",
        currentDisplay: "NowPlaying",
      });
    } else {
      this.setState({
        currentItem: this.state.currentItem,
        currentDisplay: this.state.currentItem,
      });
    }
  };

  backToMenu = () => {
    const { currentItem } = this.state;
    if (currentItem === "NowPlaying" || currentItem === "Artists") {
      this.setState({
        currentItem: { currentItem },
        currentDisplay: "Music",
      });
    } else {
      this.setState({
        currentItem: { currentItem },
        currentDisplay: "Menu",
      });
    }
  };

  onPlayPauseHandler = () => {
    if (this.state.currentDisplay === "NowPlaying") {
      if (this.state.isPlaying === true) {
        console.log("Audio paused");
        this.state.audio.pause();
        this.setState({
          isPlaying: false,
        });
      } else {
        console.log("Audio played");
        this.state.audio.play();
        this.setState({
          isPlaying: true,
        });
      }
    }
  };

  componentDidMount = () => {
    let audioFile = document.querySelector("#audioFile");

    this.setState({
      audio: audioFile,
    });
  };

  render() {
    const { currentItem, currentDisplay } = this.state;
    return (
      <div className="ipodBody" style={styles.ipodBody}>
        <audio src={song} type="audio/mp3" loop id="audioFile" />
        <Display
          currentItem={currentItem}
          currentDisplay={currentDisplay}
          audio={this.state.audio}
        />
        <div
          id="controller"
          style={styles.wheel}
          onMouseOver={this.rotateEventHandler}
        >
          <div style={styles.buttonContainer}>
            <div style={styles.menuButton}>
              <i
                onClick={this.backToMenu}
                style={{
                  alignSelf: "center",
                  fontSize: "16px",
                  color: "#A3B1C6",
                }}
                className="fas fa-bars"
              ></i>
            </div>
          </div>
          <div style={styles.buttonContainer}>
            <div style={styles.middleButtons}>
              <i
                style={{
                  alignSelf: "center",
                  fontSize: "16px",
                  color: "#A3B1C6",
                }}
                className="fas fa-fast-backward"
              ></i>
              <div
                onClick={this.changeDisplayHandler}
                style={styles.controlButton}
              ></div>
              <i
                style={{
                  alignSelf: "center",
                  fontSize: "16px",
                  color: "#A3B1C6",
                }}
                className="fas fa-fast-forward"
              ></i>
            </div>
          </div>
          <div style={styles.buttonContainer}>
            <div onClick={this.onPlayPauseHandler} style={styles.playButton}>
              <i
                onClick={this.onPlayPauseHandler}
                style={{
                  alignSelf: "center",
                  fontSize: "16px",
                  color: "#A3B1C6",
                  marginRight: "10px",
                }}
                className="fas fa-pause"
              ></i>
              <i
                onClick={this.onPlayPauseHandler}
                style={{
                  alignSelf: "center",
                  fontSize: "16px",
                  color: "#A3B1C6",
                }}
                className="fas fa-play"
              ></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default IpodBody;

const styles = {
  ipodBody: {
    width: "250px",
    height: "450px",
    backgroundColor: "#E0E5EC",
    borderRadius: "25px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    paddingBottom: "10px",
    boxShadow: "9px 9px 16px 0 #FFFFFF inset, -9px -9px 16px 0 #A3B1C6 inset",
  },
  wheel: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    background: "#E0E5EC",
    boxShadow: "9px 9px 16px 0 #FFFFFF inset, -9px -9px 16px 0 #A3B1C6 inset",
    cursor: "pointer",
    zIndex: 1,
  },
  buttonContainer: {
    width: "100%",
    height: "33%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  menuButton: {
    alignSelf: "center",
  },
  playButton: {
    alignSelf: "center",
  },
  middleButtons: {
    alignSelf: "center",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  controlButton: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    background: "#E0E5EC",
    boxShadow:
      "9px 9px 16px 0 rgb(163,177,198, 0.8) inset, -9px -9px 16px 0 rgba(255,255,255) inset",
    zIndex: "10",
    overflow: "hidden",
    color: "#fff",
    fontSize: "24px",
  },
};
