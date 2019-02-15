import React from "react";
import { Redirect } from "react-router-dom";
import { getPosts, addPost, updatePost } from "./api/index";
class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      post: {
        title: "",
        content: ""
      }
    };
  }
  fetchPosts() {
    return getPosts()
      .then(posts => {
        this.setState({ posts: posts });
      })
      .catch(err => {
        this.setState({ errorMessage: err.message });
      });
  }

  handleChange = e => {
    let post = this.state.post;
    post[e.target.name] = e.target.value;
    this.setState({
      post
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    addPost(this.state.post).then(() => {
      this.fetchPosts();
    });
  };

  handleLogOut = e => {
    e.preventDefault();
    sessionStorage.clear();
    this.props.logOut();
  };
  render() {
    if (sessionStorage.getItem("userData") == null) {
      console.log("hit redirect");

      return <Redirect to={"/"} />;
    }
    console.log(this.state);
    return (
      <div className="row">
        <p> Welcome to home page</p>
        <div className="col" data-spy="affix" data-offset-top="50">
          <form>
            <div className="form-group">
              <label>
                Title:
                <input
                  className="form-control"
                  type="text"
                  name="title"
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <div className="form-group">
              <label>
                Content:
                <textarea
                  className="form-control"
                  rows="6"
                  placeholder="How do you feel"
                  name="content"
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <br />
            <button onClick={this.handleSubmit}>Submit</button>
            <button onClick={this.handleLogOut}>log out</button>
          </form>
        </div>
        <div className="col" data-spy="affix" data-offset-top="10">
          <h4>Self-compassion Journal</h4>
          {this.state.posts &&
            this.state.posts.map(post => (
              <div>
                <h3>{post.title}</h3>
                <h5 className="text-warning">{post.content}</h5>
                <hr />
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default Home;
