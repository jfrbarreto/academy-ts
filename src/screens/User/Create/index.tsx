import * as React from "react";
import Header from "../../_shared/Header";
import UserCreate from "./Body";

class List extends React.Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Header />
        <UserCreate />
      </React.Fragment>
    );
  }
}

export default List;