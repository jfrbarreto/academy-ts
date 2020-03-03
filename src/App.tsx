import * as React from "react";
import { connect } from "react-redux";
import { AppState } from "./store";

import { HeaderState } from "./store/header/types";
import { updateHeaderVisibility } from "./store/header/actions";

interface AppProps {
  header: HeaderState;
  updateHeaderVisibility: typeof updateHeaderVisibility;
}

class App extends React.Component<AppProps> {
  state = {};

  render() {
    return <div> Olá</div>;
  }
}

const mapStateToProps = (state: AppState) => ({
  header: state.header
});

export default connect(mapStateToProps, { updateHeaderVisibility })(App);
