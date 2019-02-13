import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      loggedin: false
    };
  }
  setUserName = name => {
    this.setState({ username: name });
  };
  componentDidMount() {
    console.log(localStorage.getItem("userData"));
    if (localStorage.getItem("userData")) {
      this.setState({ loggedin: true });
    }
    if (this.state.loggedin) {
      <Redirect to={"/home"} />;
    }
  }

  render() {
    return (
      <Router>
        <div>
          <h1>We've all been there, you are not alone.</h1>
          <p>{localStorage.getItem("name")} 你好！</p>
          <Route
            exact
            path="/"
            render={props => (
              <Login {...props} setUserName={this.setUserName} />
            )}
          />
          <Route exact path="/home" component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
