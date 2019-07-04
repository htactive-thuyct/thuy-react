import React, { Component } from "react";

export default class Item extends Component {
  onClickClose = () => {
    this.props.removeItem(this.props.index);
  };
  onClickDone() {
    console.log("object");
  }

  render() {
    console.log(this.props.item.task);
    return (
      <li className="list-group-item checkbox">
        <div className="row">
          <div className="row-input  col-md-1 col-xs-1 col-lg-1 col-sm-1 checkbox">
            <label>
              <input
                id="toggleTaskStatus"
                type="checkbox"
                onClick={this.onClickDone}
              />
            </label>
          </div>
          <div className="col-md-10 col-xs-10 col-lg-10 col-sm-10 task-text ${task.isComplete ? 'complete' : ''}">
            <input
              className="inputTask"
              type="text"
              value={this.props.item.task}
              disabled
            />
            {/* <p>{this.props.item.task}</p> */}
          </div>
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
