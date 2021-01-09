import React, { Component } from "react";

export class Settings extends Component {
  render() {
    return (
      <div style={styles.container}>
        <h3 style={{ fontSize: "20px" }}>Artists</h3>
        <i
          style={{ fontSize: "50px", color: "#282828" }}
          className="fas fa-play"
        ></i>
      </div>
    );
  }
}

export default Settings;

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "column",
    height: "160px",
    paddingBottom: "20px",
    paddingTop: "20px",
    backgroundColor: "#fff",
    fontFamily: "Roboto",
  },
};
