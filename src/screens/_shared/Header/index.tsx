import * as React from "react";
import { connect } from "react-redux";
import { AppState } from "../../../store/configureStore";
import { HeaderState, Routes } from "../../../store/header/types";
import {
  updateHeaderVisibility,
  updateFilterValue
} from "../../../store/header/actions";
import { updateFilteredPostList } from "../../../store/list/actions";

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
  DropdownButton,
  InputGroup,
  Dropdown,
  ButtonGroup,
  Badge
} from "react-bootstrap";
import { ListBodyState } from "../../../store/list/types";

interface HeaderProps {
  header: HeaderState;
  updateHeaderVisibility: typeof updateHeaderVisibility;
  updateFilterValue: typeof updateFilterValue;
  updateFilteredPostList: typeof updateFilteredPostList;
  push: Push;
  router: RouterState;
  listBody: ListBodyState;
}

class Header extends React.Component<HeaderProps> {
  snipetStyle = { fontSize: "10px", color: "grey" };

  componentDidMount() {
    console.log("<Header> mount!");
  }

  componentDidUpdate() {
    console.log("<Header> update!");
  }

  handleVisibility(): void {
    const {
      header: { visible },
      updateHeaderVisibility
    } = this.props;
    updateHeaderVisibility(!visible);
  }

  nav = (path: Routes): void => {
    this.props.push(path);
  };

  isActive = (link: Routes): boolean => {
    const {
      router: {
        location: { pathname }
      }
    } = this.props;
    return pathname.includes(link);
  };

  filterUser = (event: React.MouseEvent<HTMLButtonElement>): void => {
    const {
      listBody: { postList },
      updateFilterValue,
      updateFilteredPostList
    } = this.props;

    let target = event.target as HTMLInputElement;
    const filteredPostList = postList.filter(post => {
      return post.userId === parseInt(target.value, 10);
    });
    updateFilterValue(target.value);
    updateFilteredPostList(filteredPostList);
  };

  render() {
    const {
      header: { title, subtitle, details, visible, filterValue }
    } = this.props;

    return (
      <Navbar style={{ marginBottom: "15px" }} bg="light" expand="lg">
        <Navbar.Brand>
          <span style={this.snipetStyle}>[title]</span> {title}
        </Navbar.Brand>
        <Navbar.Brand>
          <span style={this.snipetStyle}>[subtitle]</span> {subtitle}
        </Navbar.Brand>
        {visible && (
          <Navbar.Brand>
            <span style={this.snipetStyle}>[details]</span> {details}
          </Navbar.Brand>
        )}
        <Button onClick={() => this.handleVisibility()}>
          {visible ? "Hide" : "Show"}
        </Button>

        <Nav className="ml-auto">
          {this.isActive("list") && (
            <Form onSubmit={(event: any) => event.preventDefault()} inline className="" style={{ marginRight: "30px" }}>
              <Form.Label style={{ marginRight: '10px'}}>Filter</Form.Label>
              <FormControl
                type={"number"}
                value={filterValue}
                onChange={(e: any) => this.filterUser(e)}
                aria-describedby="basic-addon1"
                disabled={this.isActive('list-details')}
              />
              
            </Form>
          )}
          <Nav.Link
            active={this.isActive("home")}
            onClick={() => this.nav("home")}
          >
            Home
          </Nav.Link>
          <Nav.Link
            active={this.isActive("list")}
            onClick={() => this.nav("list")}
          >
            List
          </Nav.Link>
          <Nav.Link
            active={this.isActive("todo")}
            onClick={() => this.nav("todo")}
          >
            To-Do
          </Nav.Link>
          <Nav.Link
            active={this.isActive("users")}
            onClick={() => this.nav("users")}
          >
            Users
          </Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  header: state.header,
  router: state.router,
  listBody: state.listBody
});

export default connect(mapStateToProps, {
  updateHeaderVisibility,
  updateFilterValue,
  updateFilteredPostList,
  push
})(Header);
