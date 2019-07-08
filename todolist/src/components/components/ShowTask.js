import React from "react";
import Item from "./Item";

export default class ShowTask extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log(this.props.task);
    var items = this.props.task.map((item, index) => (
      <Item
        key={index}
        item={item}
        index={index}
        markTodoDone={this.props.markTodoDone}
        removeItem={this.props.removeItem}
      />
    ));
    return <ul className="list-group"> {items} </ul>;
  }
}
