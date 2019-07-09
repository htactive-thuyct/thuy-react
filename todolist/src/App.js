import React from "react";
import AddList from "./components/AddList.js";
import "./App.css";
import ShowTask from "./components/ShowTask.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listTask: []
    };
  }
  getData = async () => {
    await fetch("http://5d22a2982ba8cf0014c44f26.mockapi.io/listTask", {
      method: "GET",
      mode: "cors"
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          listTask: data
        });
      })
      .catch(err => err);
  };

  async componentDidMount() {
    this.getData();
  }

  addItem = async task => {
    let newTask = { isCompleted: false, task: task };
    await fetch("http://5d22a2982ba8cf0014c44f26.mockapi.io/listTask", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(newTask),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        this.getData();
      })
      .catch(err => err);
  };

  removeItem = async id => {
    await fetch("http://5d22a2982ba8cf0014c44f26.mockapi.io/listTask/" + id, {
      method: "DELETE",
      mode: "cors"
    })
      .then(res => {
        this.getData();
      })
      .catch(err => err);
  };

  markTodoDone = async id => {
    const task = this.state.listTask.find(x => x.id === id);
    task.isCompleted = !task.isCompleted;

    await fetch("http://5d22a2982ba8cf0014c44f26.mockapi.io/listTask/" + id, {
      method: "PUT",
      mode: "cors",
      body: JSON.stringify(task),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        this.getData();
      })
      .catch(err => err);
  };

  updateItem = async item => {
    await fetch(
      `http://5d22a2982ba8cf0014c44f26.mockapi.io/listTask/${item.id}`,
      {
        method: "PUT",
        mode: "cors",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json"
        }
      }
    ).then(res => {
      this.getData();
    });
  };

  render() {
    return (
      <>
        <AddList addItem={this.addItem} />
        <ShowTask
          task={this.state.listTask}
          removeItem={this.removeItem}
          markTodoDone={this.markTodoDone}
          updateItem={this.updateItem}
        />
      </>
    );
  }
}

export default App;
