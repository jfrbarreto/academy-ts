import * as React from "react";
import { connect } from "react-redux";
import { AppState } from "../../../store/configureStore";
import { push, Push, RouterState } from "connected-react-router";
import { ListBodyState, PostList } from "../../../store/list/types";
import { updatePostList } from "../../../store/list/actions";
import axios from "axios";

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
  DropdownButton,
  Toast,
  Badge,
  Spinner,
  Table
} from "react-bootstrap";
import { HeaderState } from "../../../store/header/types";

interface UsersBodyProps {
  router: RouterState;
  header: HeaderState;
  push: Push;
}

class UsersBody extends React.Component<UsersBodyProps> {
  state = {};
  componentDidMount() {
    console.log("<UsersBody> mount!");
  }

  componentDidUpdate() {
    console.log("<UsersBody> update!");
  }

  render() {
    return (
      <Container>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  router: state.router,
  header: state.header,
  listBody: state.listBody
});

export default connect(mapStateToProps, { updatePostList, push })(UsersBody);
