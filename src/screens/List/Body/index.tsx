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
  Spinner
} from "react-bootstrap";
import { HeaderState } from "../../../store/header/types";

interface ListBodyProps {
  router: RouterState;
  header: HeaderState;
  listBody: ListBodyState;
  updatePostList: typeof updatePostList;
  push: Push
}

/* interface ListBodyState {
  postList?: Array<{ userId: number; id: number; title: string; body: string }>;
} */

class ListBody extends React.Component<ListBodyProps> {
  state = { loading: false };
  componentDidMount() {
    console.log("<ListBody> mount!");

    const {
      updatePostList,
      listBody: { postList, filteredPostList }
    } = this.props;
    const that = this;

    if (!(postList || filteredPostList)) {
      that.setState({ loading: true });
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then(function(response: any) {
          updatePostList(response.data);
          that.setState({ loading: false });
        })
        .catch(function(error: any) {
          that.setState({ loading: false });
          console.log(error);
        });
    }
  }

  componentDidUpdate() {
    console.log("<ListBody> update!");
  }

  getPostDetails(postId: number) {
    console.log(postId);

    this.props.push('list-details', postId);

  }

  render() {
    const {
      listBody: { postList, filteredPostList },
      header: { filterValue }
    } = this.props;
    const { loading } = this.state;
    let listToPresent: PostList;

    if (filterValue && filteredPostList) {
      listToPresent = filteredPostList;
    } else if (postList) {
      listToPresent = postList;
    } else {
    }

    return (
      <Container>
        {loading && <Spinner animation="grow" />}
        <Row>
          <Col>
            {listToPresent &&
              listToPresent.map(post => {
                return (
                  <Toast
                    style={{ cursor: "pointer" }}
                    onClick={() => this.getPostDetails(post.id)}
                    key={post.id}
                  >
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
  router: state.router,
  header: state.header,
  listBody: state.listBody
});

export default connect(mapStateToProps, { updatePostList, push })(ListBody);
