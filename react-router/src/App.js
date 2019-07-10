import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./App.css";

const data = [
  {
    name: "Thuy",
    age: 8,
    img:
      "https://scontent.fdad1-1.fna.fbcdn.net/v/t1.0-9/65527308_662228740955172_4774410208875118592_n.jpg?_nc_cat=102&_nc_oc=AQmhI9b-utIylwIjGaTkGkY37WVyH-hExUja68fZoDbNQluEArJP8Bz6tPIFaNwnefw&_nc_ht=scontent.fdad1-1.fna&oh=c0b59817d7ed2c45b25f20c6a1982484&oe=5DBE3F34"
  },
  {
    name: "Thuong",
    age: 9,
    img:
      "https://scontent.fdad1-1.fna.fbcdn.net/v/t1.0-9/55957860_309502936345017_4027559449580273664_n.jpg?_nc_cat=105&_nc_oc=AQkuM7qCuXHvVhXbNxcj0Zc9B156KYZiAFarpNGfewg2wwjNXMqCRBsdSeZUYPUGgsE&_nc_ht=scontent.fdad1-1.fna&oh=e6b4d1ebc1f2d9f186b0c7eefb829269&oe=5DB8CB16"
  },
  {
    name: "Nhung",
    age: 10,
    img:
      "https://scontent.fdad2-1.fna.fbcdn.net/v/t1.0-9/47203462_2186547658339095_2704806850666168320_n.jpg?_nc_cat=107&_nc_oc=AQn9uuHpa1o8vKcLAH0EkbPFpnGobFZdRqeH038hCOSFEUNJvRAFtuP6ACriupo-lhk&_nc_ht=scontent.fdad2-1.fna&oh=5651c0ed603dde17ea2875dccc09c05c&oe=5DB070DD"
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      student: data
    };
  }

  render() {
    const list = this.state.student;
    const students = list.map((student, index) => (
      <div key={index}>
        <ul className="menu">
          <li>
            <Link to={{ pathname: student.name, state: { list } }}>
              {student.name}
            </Link>
          </li>
        </ul>
      </div>
    ));
    return (
      <BrowserRouter>
        <div>
          <ul className="ul">{students}</ul>
          <hr />
          <div className="main-route-place">
            <Route exact path="/Thuy" component={Thuy} />
            <Route path="/Thuong" component={Thuong} />
            <Route path="/Nhung" component={Nhung} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

class Thuong extends React.Component {
  render() {
    const list = this.props.location.state.list;
    const students = list
      .filter(student => student.name === "Thuong")
      .map((student, index) => (
        <div key={index} className="data">
          <img
            src={student.img}
            style={{ width: "350px", height: "300px" }}
            alt="Logo"
          />
          <h1 className="age">{student.age} Tuổi</h1>
        </div>
      ));

    return <ul className="ul">{students}</ul>;
  }
}

class Thuy extends React.Component {
  render() {
    const list = this.props.location.state.list;
    const students = list
      .filter(student => student.name === "Thuy")
      .map((student, index) => (
        <div key={index} className="data">
          <img
            src={student.img}
            style={{ width: "300px", height: "300px" }}
            alt="Logo"
          />
          <h1 className="age">{student.age} Tuổi</h1>
        </div>
      ));

    return <ul className="ul">{students}</ul>;
  }
}

class Nhung extends React.Component {
  render() {
    const list = this.props.location.state.list;
    const students = list
      .filter(student => student.name === "Nhung")
      .map((student, index) => (
        <div key={index} className="data">
          <img
            src={student.img}
            style={{ width: "300px", height: "300px" }}
            alt="Logo"
          />
          <h1 className="age">{student.age} Tuổi</h1>
        </div>
      ));

    return <ul className="ul">{students}</ul>;
  }
}
export default App;
