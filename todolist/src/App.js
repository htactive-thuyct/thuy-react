import React from "react";
import AddList from "./components/AddList.js";
import "./App.css";
import ShowTask from "./components/ShowTask.js";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listTask: [
        { task: "learn react", iscompleted: false },
        { task: "Go shopping", iscompleted: true },
        { task: "buy flowers", iscompleted: false }
      ]
    };
  }

  addItem = task => {
    this.state.listTask.push({
      task: task,
      iscompleted: false
    });
    this.setState({ listTask: this.state.listTask });
    // console.log(this.state.listTask);
  };

  removeItem = index => {
    // console.log(index);
    let tasks = this.state.listTask;
    tasks.splice(index, 1);
    this.setState({ listTask: tasks });
  };

  markTodoDone = () => {
    this.state.listTask.iscompleted = !this.state.listTask.iscompleted;
    console.log("hello");
  };

  render() {
    // console.log(this.state);
    return (
      <>
        <AddList addItem={this.addItem} />
        <ShowTask task={this.state.listTask} removeItem={this.removeItem} />
      </>
    );
  }
}

export default App;
