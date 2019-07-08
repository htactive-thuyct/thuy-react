import React, { Component } from "react";

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = { update: "" };
  }
  onClickClose = id => {
    this.props.removeItem(id);
  };

  onClickDone = id => {
    this.props.markTodoDone(id);
  };

  render() {
    const { isCompleted, task, id } = this.props.item;
    return (
      <li className="list-group-item checkbox">
        <div className="row">
          <div className="row-input  col-md-1 col-xs-1 col-lg-1 col-sm-1 checkbox">
            <input
              id="toggleTaskStatus"
              type="checkbox"
              defaultChecked={isCompleted}
              onClick={() => this.onClickDone(id)}
            />
          </div>
          <div
            className={`col-md-10 col-xs-10 col-lg-10 col-sm-10 task-text ${
              isCompleted ? "complete" : ""
            }`}
          >
            <input
              className="inputTask"
              type="text"
              value={task}
              disabled
              onChange={this.handleChange}
            />
          </div>

          <div className="col-md-1 col-xs-1 col-lg-1 col-sm-1 delete-icon-area">
            <a id="save">
              <button
                id="editTask"
                onClick={() => this.onClickClose(id)}
                className="fa fa-pencil"
              >
                xóa
              </button>
            </a>
          </div>
        </div>
      </li>
    );
  }
}
