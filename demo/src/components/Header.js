import React, { Component } from "react";

export default class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ul className="nav nav-tabs">
        {this.props.data.menu.map(item => (
          <li className="nav-item">
            <a className="nav-link active" href="#">
              {item}
            </a>
          </li>
        ))}
      </ul>
    );
  }
}
