import * as React from "react";
import Header from "../_shared/Header";
import UsersBody from "./Body"

class Users extends React.Component {
  state = {};

  componentDidMount() {
    console.log("<Users> mount!");
  }

  componentDidUpdate() {
    console.log("<Users> update!");
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

export default Users;