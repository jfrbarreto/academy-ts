import * as React from "react";
import Header from "../../_shared/Header";
import ListDetailsBody from "./Body";

class List extends React.Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Header />
        <ListDetailsBody />
      </React.Fragment>
    );
  }
}

export default List;