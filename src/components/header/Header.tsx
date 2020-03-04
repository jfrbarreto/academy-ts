import * as React from "react";
import { connect } from "react-redux";
import { AppState } from "../../store/configureStore";
import { HeaderState, Routes } from "../../store/header/types";
import { updateHeaderVisibility } from "../../store/header/actions";

import { push, Push, RouterState } from 'connected-react-router'

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

interface HeaderProps {
    header: HeaderState;
    updateHeaderVisibility: typeof updateHeaderVisibility,
    push: Push,
    router: RouterState
}


class Header extends React.Component<HeaderProps> {
  
    snipetStyle = { fontSize: "10px", color: "grey" };

  componentDidMount() {
    console.log('<Header> mount!', this.props, this.state)
  }

  componentDidUpdate() {
    console.log("<Header> update!");
  }

  handleVisibility() {
      const { header: { visible }, updateHeaderVisibility } = this.props;
      updateHeaderVisibility(!visible);
  }

  nav = (path: Routes) => this.props.push(path);

  isActive = (link: Routes): boolean => {
      const { router: { location: {pathname} } } = this.props;
      return pathname.includes(link);
  }

  render() {
    const { header: { title, subtitle, details, visible} } = this.props;

    return (
      <Navbar bg="light" expand="lg">
          
        <Navbar.Brand>
          <span style={this.snipetStyle}>[title]</span> {title}
        </Navbar.Brand>
        <Navbar.Brand>
          <span style={this.snipetStyle}>[subtitle]</span> {subtitle}
        </Navbar.Brand>
        { visible && <Navbar.Brand>
          <span style={this.snipetStyle}>[details]</span> {details}
        </Navbar.Brand>}
        <Button onClick={() => this.handleVisibility()}>{visible ? 'Hide': 'Show'}</Button>
        <Nav className="ml-auto">
        <Nav.Link active={this.isActive('home')} onClick={() => this.nav('home')}>Home</Nav.Link>
          <Nav.Link active={this.isActive('list')} onClick={() => this.nav('list')}>List</Nav.Link>
          <Nav.Link active={this.isActive('todo')} onClick={() => this.nav('todo')}>To-Do</Nav.Link>
          <Nav.Link active={this.isActive('users')} onClick={() => this.nav('users')}>Users</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
    header: state.header,
    router: state.router
  });

export default connect(mapStateToProps, { updateHeaderVisibility, push })(Header);
