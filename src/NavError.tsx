import * as React from "react";
import Header from "./components/header/Header";

class NavError extends React.Component {
  state = {};
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
