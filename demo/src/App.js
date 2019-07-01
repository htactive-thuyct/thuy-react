import React from "react";
import "./App.css";
import Header from "./components/Header.js";
import Content from "./components/Content.js";
import Clock from "./components/Clock";
const a = { Title: "PNV", menu: ["Students", "Teacher", "Class", "Score"] };
const b = { name: "Thuy", age: 10 };
function App() {
  return (
    <>
      <Header data={a} />;<Content data={b} />;
      <Clock data={b} />;
    </>
  );
}

export default App;
