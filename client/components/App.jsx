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
    console.log(sessionStorage.getItem("userData"));
    if (sessionStorage.getItem("userData")) {
      this.setState({ loggedin: true });
    }
  }

  logOut = () => {
    this.setState({ loggedin: false });
  };

  render() {
    return (
      <Router>
        <div>
          <h1>We've all been there, you are not alone.</h1>
          <p>{sessionStorage.getItem("name")} 你好！</p>
          {this.state.loggedin && <Redirect to={"/home"} />}
          <Route
            exact
            path="/"
            render={props => (
              <Login {...props} setUserName={this.setUserName} />
            )}
          />
          <Route
            exact
            path="/home"
            render={props => <Home {...props} logOut={this.logOut} />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
