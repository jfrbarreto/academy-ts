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
  router: RouterState;
  push: Push;
  updateUserOnEdit: typeof updateUserOnEdit
}

interface IState {
  users: Array<User>;
}

class UsersBody extends React.Component<IProps, IState> {
  state: IState;
  constructor(props: IProps) {
    super(props);
    this.state = { users: [] };
  }

  componentDidMount() {
    console.log("<UsersBody> mount!");
    this.setState({ users: ls.getAll() });
  }

  componentDidUpdate() {
    console.log("<UsersBody> update!");
  }

  editUser = (user: User) => {
    this.props.updateUserOnEdit(user);
    this.props.push('user-create')
  }

  

  deleteUser = (userId: number) => {
      ls.deleteUser(userId);
      this.setState({ users: ls.getAll() });
  }

  render() {
    const { users } = this.state;
    return (
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Age</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.address}</td>
                <td style={{textAlign: 'center'}}>
                  <Button onClick={()=> this.editUser(user)} variant="info" size="sm">
                    Edit
                  </Button>
                  {"   "}
                  <Button onClick={()=> this.deleteUser(user.id)} variant="danger" size="sm">
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
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

export default connect(mapStateToProps, { updateUserOnEdit, push })(UsersBody);
