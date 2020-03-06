import * as React from "react";
import { connect } from "react-redux";
import { AppState } from "../../../../store/configureStore";
import { push, Push, RouterState } from "connected-react-router";
import {
  ListBodyState,
  PostList,
  PostListDetails
} from "../../../../store/list/types";
import { updatePostList } from "../../../../store/list/actions";
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
  Spinner
} from "react-bootstrap";
import { HeaderState } from "../../../../store/header/types";

interface ListDetailsBodyProps {
  router: RouterState;
  push: Push;
}

interface IState {
  loading: boolean;
  postDetails?: PostListDetails;
}

/* interface ListBodyState {
  postList?: Array<{ userId: number; id: number; title: string; body: string }>;
} */

class ListDetailsBody extends React.Component<ListDetailsBodyProps, IState> {
  state: Readonly<IState> = {
    loading: false
  };
  componentDidMount() {
    console.log("<ListDetailsBody> mount!");

    const {
      router: {
        location: { state: postId }
      }
    } = this.props;

    const that = this;

    that.setState({ loading: true });
    axios
      .get("https://jsonplaceholder.typicode.com/comments", {
        params: {
          postId: postId
        }
      })
      .then(function(response: any) {
        console.log("response", response);

        that.setState({ loading: false, postDetails: response.data });
      })
      .catch(function(error: any) {
        that.setState({ loading: false });
        console.log(error);
      });
  }

  componentDidUpdate() {
    console.log("<ListDetailsBody> update!");
  }

  render() {
    const { loading } = this.state;

    return (
      <Container>
        {loading && <Spinner animation="grow" />}
        <Row>
          <Col>
            {this.state.postDetails &&
              this.state.postDetails.map(post => {
                return (
                  <Toast key={post.id}>
                    <Toast.Header closeButton={false}>
                      <strong className="mr-auto">{post.name}</strong>
                      <Badge variant="success">Post: {post.postId}</Badge>
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

export default connect(mapStateToProps, { push })(ListDetailsBody);
