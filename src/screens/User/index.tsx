import * as React from "react";
import Header from "../_shared/Header";
import UsersBody from "./Body"

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
        <UsersBody />
      </React.Fragment>
    );
  }
}

export default User;