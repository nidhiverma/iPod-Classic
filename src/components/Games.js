import React, { Component } from "react";

export class Games extends Component {
  render() {
    return <div style={styles.container}></div>;
  }
}

export default Games;

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    background:
      'url("https://uploads.scratch.mit.edu/users/avatars/1397/7641.png")',
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
};
