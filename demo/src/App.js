import React from "react";
import "./App.css";
import Header from "./components/Header.js";
import Content from "./components/Content.js";
import Clock from "./components/Clock";
import Button from "./components/Button";

const a = { Title: "PNV", menu: ["Students", "Teacher", "Class", "Score"] };
const b = { name: "Thuy", age: 10 };
class App extends React.Component {
  state = {
    title: "PNV",
    menu: ["Students", "Teacher", "Class", "Score"],
    person: { name: "Thuy", age: 10 }
  };
  render() {
    const { title, menu, person } = this.state;
    return (
      <>
        <Header title={title} menu={menu} />
        <Content />
        <Clock person={person} />;
        <Button />
      </>
    );
  }
}

export default App;
