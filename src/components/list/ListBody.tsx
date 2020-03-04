import * as React from "react";
import { connect } from "react-redux";
import { AppState } from "../../store/configureStore";
import { push, Push, RouterState } from "connected-react-router";
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
  Badge
} from "react-bootstrap";

interface ListBodyProps {
  router: RouterState;
}

interface ListBodyState {
  postList?: Array<{ userId: number; id: number; title: string; body: string }>;
}

class ListBody extends React.Component<ListBodyProps, ListBodyState> {
  state: ListBodyState;

  componentDidMount() {
    console.log("<ListSearch> mount!", this.props, this.state);
    const that = this;
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function(response: any) {
        let dataReceived: any = response.data;
        that.setState({ postList: dataReceived });
      })
      .catch(function(error: any) {
        console.log(error);
      });
  }

  componentDidUpdate() {
    console.log("<ListSearch> update!", this.props, this.state);
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            {this.state &&
              this.state.postList.map(post => {
                return (
                  <Toast>
                    <Toast.Header closeButton={false}>
                      <strong className="mr-auto">{post.title}</strong>
                      <Badge variant="primary">User: {post.userId}</Badge>
                    </Toast.Header>
                    <Toast.Body>{post.body}</Toast.Body>
                  </Toast>
                );
              })}
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  router: state.router
});

export default connect(mapStateToProps, {})(ListBody);
