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
      <Redirect to={"/"} />;
    }
    console.log(this.state);
    return (
      <div>
        <p> Welcome to home page</p>
        <form>
          <label>
            Title:
            <input type="text" name="title" onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Content:
            <textarea
              placeholder="How do you feel"
              name="content"
              onChange={this.handleChange}
            />
          </label>
          <br />
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
        <button onClick={this.handleLogOut}>login out</button>
        {this.state.posts &&
          this.state.posts.map(post => (
            <div>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
              <hr />
            </div>
          ))}
      </div>
    );
  }
}

export default Home;
