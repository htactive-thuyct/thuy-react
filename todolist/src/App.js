import React from "react";
import AddList from "./components/AddList.js";
import "./App.css";
import ShowTask from "./components/ShowTask.js";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listTask: [
        { task: "learn react", isCompleted: false },
        { task: "Go shopping", isCompleted: true },
        { task: "buy flowers", isCompleted: false }
      ]
    };
  }

  addItem = task => {
    const newList = [
      ...this.state.listTask,
      {
        task: task,
        iscompleted: false
      }
    ];
    this.setState({ listTask: newList });
    // console.log(this.state.listTask);
  };

  removeItem = index => {
    // console.log(index);
    const newList = this.state.listTask.filter((t, i) => i !== index);
    this.setState({ listTask: newList });
  };

  markTodoDone = index => {
    const newList = this.state.listTask.map((t, i) => {
      if (i === index) {
        return {
          ...t,
          isCompleted: !t.isCompleted
        };
      }
      return t;
    });
    this.setState({ listTask: newList });
    //  console.log("hello");
  };

  render() {
    // console.log(this.state);
    return (
      <>
        <AddList addItem={this.addItem} />
        <ShowTask
          task={this.state.listTask}
          removeItem={this.removeItem}
          markTodoDone={this.markTodoDone}
        />
      </>
    );
  }
}

export default App;
