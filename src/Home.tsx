import * as React from "react";
import Header from "./components/header/Header";

class Home extends React.Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Header />
        <span>HOME</span>
      </React.Fragment>
    );
  }
}

export default Home;
