import React, { Component } from "react";

export default class AddList extends Component {
  constructor(props) {
    super(props);
    this.state = { newTask: "" };
  }

  handleChange = event => {
    this.setState({ newTask: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addItem(this.state.newTask);
    // console.log("A name was submitted: " + this.state.newTask);
    // // console.log();
  };

  render() {
    return (
      <div className="container">
        <div className="content-area row">
          <div className="col-md-2 col-xs-2 col-lg-2 col-sm-2" />
          <div className="col-md-8 col-xs-8 col-lg-8 col-sm-8">
            <h2>ToDo List</h2>
            <form onSubmit={this.handleSubmit}>
              <div className="row input-area">
                <div className="form-group col-md-9">
                  <input
                    type="text"
                    placeholder="New Task"
                    className="form-control"
                    id="addTask"
                    value={this.state.newTask}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group col-md-1">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Submit"
                  />
                </div>
              </div>
            </form>

            <div className="btn">
              <button className="btn .btn">Completed</button>
              <button className="btn .btn">Incomplete</button>
              <button className="btn .btn">Done</button>
              <button className="btn .btn">Clear Complete</button>
              <button
                style={{ visibility: "hidden" }}
                id="undo"
                className="btn .btn"
              >
                <i className="fa fa-undo" />
              </button>
            </div>
            <br />
            <ul className="list-group" id="taskList" />
          </div>
          <div className="col-md-2 col-xs-2 col-lg-2 col-sm-2" />
        </div>
      </div>
    );
  }
}
