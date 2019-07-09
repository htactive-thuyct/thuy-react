import React, { Component } from "react";

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
      update: ""
    };
  }
  onClickClose = id => {
    this.props.removeItem(id);
  };

  onClickDone = id => {
    this.props.markTodoDone(id);
  };

  handleChange = event => {
    this.setState({ update: event.target.value });
    this.props.item.task = event.target.value;
  };

  onClickCheck = () => {
    this.props.updateItem({
      ...this.props.item,
      task: this.state.update
    });
    this.setState({
      display: !this.state.display
    });
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
              id="inputUpdate"
              type="text"
              value={task}
              className={this.state.display ? "disabledInput" : "enableInput"}
              onChange={this.handleChange}
            />
          </div>

          <div className="col-md-1 col-xs-1 col-lg-1 col-sm-1 delete-icon-area">
            <i id="edit" onClick={this.onClickCheck} className="fa fa-pencil" />
            <i
              id="delete"
              onClick={() => this.onClickClose(id)}
              className="fa fa-trash"
            />
          </div>
        </div>
      </li>
    );
  }
}
