import * as React from "react";
import Header from "./components/header/Header";
import ListSearch from "./components/list/ListSearch";
import ListBody from "./components/list/ListBody";

class List extends React.Component {
  state = {};
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
