import * as React from "react";
import { connect } from "react-redux";
import { AppState } from "../../../store/configureStore";
import { push, Push, RouterState } from "connected-react-router";
import { User } from "../../../store/user/types";
import { updateUserOnEdit } from "../../../store/user/actions";
import * as ls from "../../../lib/localstorage";
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

interface IProps {
  default?: any;
}

interface IState {
  default?: any;
}

class TodoBody extends React.Component<IProps, IState> {
  state: IState;
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  componentDidUpdate() {}

  render() {
    return (
      <Container>
        <Table bordered hover>
          <thead>
            <tr>
              <th>
                <Form>
                  <Form.Group style={{ marginBottom: "0px" }} as={Row}>
                    <Col>
                      <Form.Control type="text" placeholder="New Todo" />
                    </Col>
                  </Form.Group>
                </Form>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img
                  src="/src/assets/icons/circle.svg"
                  alt=""
                  width="32"
                  height="32"
                  title="Complete"
                />{" "}
                Task #1{" "}
                <img
                  className="pull-right"
                  src="/src/assets/icons/trash.svg"
                  alt=""
                  width="32"
                  height="32"
                  title="Delete"
                />
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  router: state.router,
  user: state.user
});

export default connect(mapStateToProps, { updateUserOnEdit, push })(TodoBody);
