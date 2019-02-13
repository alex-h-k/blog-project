import React from "react";
import { getPosts } from "./api/index";
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
  navigateToPost(id) {
    return () => history.push(`/posts/${id}`);
  }

  handleChange = e => {
    let post = this.state.post;
    post[e.target.name] = e.target.value;
    console.log(e.target.value);
    this.setState({
      post
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    addPost(this.state.post).then(newPost => {
      this.fetchPosts().then(navigateToPost(post.id));
    });
  };
  render() {
    return (
      <div>
        <p> Welcome to home page!!</p>
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
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Home;
