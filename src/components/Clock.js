import React, { Component } from "react";

export default class Clock extends Component {
  constructor() {
    super();
    this.state = {
      time: new Date(),
    };
  }
  componentDidMount() {
    this.interval = setInterval(
      () =>
        this.setState({
          time: Date.now(),
        }),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { time } = this.state;
    let dateTime = new Date(time);
    let month = dateTime.getMonth();
    let day = dateTime.getDay();
    let year = dateTime.getFullYear();
    let date = dateTime.getDate();
    let localTime = dateTime.toLocaleTimeString("hi-IN");

    const dayOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let fullDate =
      dayOfWeek[day] + " " + months[month] + " " + date + ", " + year;

    return (
      <div style={styles.container}>
        <div style={styles.time}>
          <h1>{localTime.replace(localTime.substring(4, 8), " ")}</h1>
        </div>
        <div style={styles.date}>{fullDate}</div>
      </div>
    );
  }
}

const styles = {
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    background:
      'url("https://images.pexels.com/photos/774813/pexels-photo-774813.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")',
    backgroundPosition: "center",
    backgroundSize: "Cover",
    backgroundColor: "black",
    backgroundBlendMode: "overlay",
  },
  time: {
    fontSize: "20px",
    fontFamily: "Roboto",
    color: "#fff",
  },
  date: {
    fontSize: "16px",
    fontFamily: "Roboto",
    color: "#fff",
  },
};
