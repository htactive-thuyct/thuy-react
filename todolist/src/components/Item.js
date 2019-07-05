import React, { Component } from "react";

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = { newTask: "" };
  }
  onClickClose = () => {
    this.props.removeItem(this.props.index);
    //console.log(this.props.index);
  };

  onClickDone = () => {
    this.props.markTodoDone(this.props.index);
  };

  // handleChange = event => {
  //   this.setState({ newTask: event.target.value });
  //   console.log("helklo");
  // };

  // handleSubmit = event => {
  //   // event.preventDefault();
  //   // this.props.addItem(this.state.newTask);
  //   // // console.log("A name was submitted: " + this.state.newTask);
  //   console.log("helklo");
  // };

  render() {
    const { isCompleted, task } = this.props.item;
    //  console.log(isCompleted);
    return (
      <li className="list-group-item checkbox">
        <div className="row">
          <div className="row-input  col-md-1 col-xs-1 col-lg-1 col-sm-1 checkbox">
            <input
              id="toggleTaskStatus"
              type="checkbox"
              defaultChecked={isCompleted}
              onClick={this.onClickDone}
            />
          </div>
          <div
            className={`col-md-10 col-xs-10 col-lg-10 col-sm-10 task-text ${
              isCompleted ? "complete" : ""
            }`}
          >
            {task}
          </div>
          {/* <input
              className="inputTask"
              type="text"
              defaultValue={task}
              disabled
            /> */}
          {/* </div> */}
          <div className="col-md-1 col-xs-1 col-lg-1 col-sm-1 delete-icon-area">
            <a id="save">
              <button
                id="editTask"
                onClick={this.onClickClose}
                className="fa fa-pencil"
              >
                xóa
              </button>
            </a>
            <a data-confirm="Are you sure to delete this item?">
              <i id="deleteTask" className="fa fa-trash" />
            </a>
          </div>
        </div>
      </li>
    );
  }
}
