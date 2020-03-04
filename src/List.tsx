import * as React from "react";
import Header from './components/header/Header';
import ListSearch from './components/list/ListSearch';

class List extends React.Component {
  state = {};
  render() {
    return (
        <React.Fragment>
          <Header />
          <span>LIST</span>
         <ListSearch /> 
        </React.Fragment>
      );
  }
}

export default List;