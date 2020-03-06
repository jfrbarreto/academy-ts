import * as React from "react";
import Header from "../_shared/Header";

class Home extends React.Component {
  state = {};

  componentDidMount(){
    console.log("<Home> mount!");
  }
  
  componentDidUpdate(){
    console.log("<Home> update!");
  }

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
