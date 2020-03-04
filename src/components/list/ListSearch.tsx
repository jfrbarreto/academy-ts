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
  Button,
  InputGroup,
  Dropdown,
  DropdownButton
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
      <Container fluid>
        <Row>
          <Col className="ml-auto" md={{ span: 3, offset: 13 }}>
            <InputGroup className="mb-3">
              <DropdownButton
                as={InputGroup.Prepend}
                variant="outline-secondary"
                title="Search Type"
                id="input-group-dropdown-1"
              >
                <Dropdown.Item href="#">POST</Dropdown.Item>
                <Dropdown.Item href="#">LOCAL</Dropdown.Item>
              </DropdownButton>
              <FormControl aria-describedby="basic-addon1" />
            </InputGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  router: state.router
});

export default connect(mapStateToProps, {})(ListSearch);
