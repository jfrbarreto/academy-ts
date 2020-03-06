import * as React from "react";
import Header from "../_shared/Header";
import TodoBody from "./Body"

class User extends React.Component {
  state = {};

  componentDidMount() {
    console.log("<User> mount!");
  }

  componentDidUpdate() {
    console.log("<User> update!");
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <TodoBody />
      </React.Fragment>
    );
  }
}

export default User;