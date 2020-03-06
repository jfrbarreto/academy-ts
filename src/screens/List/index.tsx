import * as React from "react";
import Header from "../_shared/Header";
import ListBody from "./Body";

class List extends React.Component {
  state = {};

  componentDidMount() {
    console.log("<List> mount!");
  }

  componentDidUpdate() {
    console.log("<List> update!");
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <ListBody />
      </React.Fragment>
    );
  }
}

export default List;
