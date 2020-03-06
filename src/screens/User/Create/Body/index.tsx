import * as React from "react";
import { connect } from "react-redux";
import { AppState } from "../../../../store/configureStore";
import { push, Push, RouterState } from "connected-react-router";
import { User, UserState } from "../../../../store/user/types";
import { updatePostList } from "../../../../store/list/actions";
import * as ls from "../../../../lib/localstorage";

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
import { HeaderState } from "../../../../store/header/types";

interface IProps {
  router: RouterState;
  user: UserState;
  push: Push;
}

interface IState {
  user: User;
}

type Fields = "name" | "age" | "address";

class UserCreate extends React.Component<IProps, IState> {
  state: IState;
  constructor(props: IProps) {
    super(props);
    this.state = { user: { name: "", age: "", address: "" } };
  }

  componentDidMount() {
    console.log("<UserCreate> mount!");

    const {
      user: { userOnEdit }
    } = this.props;

    console.log(userOnEdit)

    if (userOnEdit) {
      this.setState({ user: userOnEdit });
    }
  }

  componentDidUpdate() {
    console.log("<UserCreate> update!");
  }

  nav = (path: string): void => {
    this.props.push(path);
  };

  updateField(field: Fields, value: string) {
    const {
      user: { id, name, age, address }
    } = this.state;
    switch (field) {
      case "name":
        this.setState({ user: { id: id, name: value, age: age, address: address } });
        break;
      case "address":
        this.setState({ user: { id: id, name: name, age: age, address: value } });
        break;
      case "age":
        this.setState({ user: { id: id, name: name, age: value, address: address } });
        break;
    }
  }
  submitUser = (e: React.FormEvent<HTMLFormElement>): void => {
    const {
      user: { id, name, age, address }
    } = this.state;
    const {
      user: { userOnEdit }
    } = this.props;
    e.preventDefault();

    if (userOnEdit) {
      ls.updateUser({ id: id, name: name, age: age, address: address });
    } else {
      ls.createUser({ id: id, name: name, age: age, address: address });
    }

    this.props.push("user");
  };

  render() {
    const {
      user: { name, age, address }
    } = this.state;

    return (
      <Container>
        <Form
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => this.submitUser(e)}
        >
          <Form.Group controlId="formBasicText">
            <Form.Label>Name</Form.Label>
            <Form.Control
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                this.updateField("name", e.target.value)
              }
              value={name}
              type="text"
            />
          </Form.Group>
          <Form.Group controlId="formBasicText">
            <Form.Label>Age</Form.Label>
            <Form.Control
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                this.updateField("age", e.target.value)
              }
              value={age}
              type="number"
            />
          </Form.Group>
          <Form.Group controlId="formBasicText">
            <Form.Label>Address</Form.Label>
            <Form.Control
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                this.updateField("address", e.target.value)
              }
              value={address}
              type="text"
            />
          </Form.Group>
          <Button className="pull-right" variant="primary" type="submit">
            Submit
          </Button>
          <Button
            style={{ marginRight: "10px" }}
            className="pull-right"
            variant="secondary"
            onClick={() => this.nav("user")}
          >
            Back
          </Button>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  router: state.router,
  user: state.user
});

export default connect(mapStateToProps, { push })(UserCreate);
