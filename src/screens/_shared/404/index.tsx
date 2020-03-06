import * as React from "react";
import Header from "../Header";

class NavError extends React.Component {
  state = {};

  componentDidMount() {
    console.log("<NavError> mount!");
  }

  componentDidUpdate() {
    console.log("<NavError> update!");
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <span>MISS</span>
      </React.Fragment>
    );
  }
}

export default NavError;
