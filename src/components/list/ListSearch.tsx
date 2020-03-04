import * as React from "react";
import { connect } from "react-redux";
import { AppState } from "../../store/configureStore";
import { push, Push, RouterState } from "connected-react-router";

import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button
} from "react-bootstrap";

interface ListSearchProps {
  router: RouterState;
}

class ListSearch extends React.Component<ListSearchProps> {
  componentDidMount() {
    console.log("<ListSearch> mount!", this.props, this.state);
  }

  componentDidUpdate() {
    console.log("<ListSearch> update!");
  }

  render() {
    return (
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
      </Form>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  router: state.router
});

export default connect(mapStateToProps, {})(ListSearch);
