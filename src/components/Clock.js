import React, { Component } from "react";

export default class Clock extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    // let time = new Date();
    // let month = time.getMonth();
    // let day = time.getDay();
    // let year = time.getFullYear();
    // let date = time.getDate();
    // let localTime = time.toLocaleTimeString("hi-IN");

    this.interval = setInterval(
      () =>
        this.setState({
          date: Date.now(),
          //   date: date,
          //   month: month,
          //   day: day,
          //   year: year,
          //   localTime: localTime,
        }),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    // const { localTime, month, day, date, year } = this.state;
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

    // let fullDate = months[month] + " " + date + ", " + year;

    return (
      <div style={styles.container}>
        <div style={styles.time}>
          <h1>{this.state.date}</h1>
        </div>
        <div style={styles.date}>{this.state.date}</div>
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
  },
  time: {
    fontSize: "20px",
    fontFamily: "Roboto",
    color: "#fff",
  },
  date: {
    fontSize: "12px",
    fontFamily: "Roboto",
    color: "#fff",
  },
};
