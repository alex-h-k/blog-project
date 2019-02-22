import React, { Component } from "react";
// import {Redirect} from 'react-router-dom';
import { getLoginData, registerNewUser as apiRegisterNewUser } from "../api";
import { Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      newUsername: "",
      newPassword: "",
      redirectToReferrer: false,
      showRegistration: false
    };

    this.login = this.login.bind(this);
    this.registration = this.registration.bind(this);
    this.onChange = this.onChange.bind(this);
    this.registerNewUser = this.registerNewUser.bind(this);
  }

  registerNewUser() {
    // console.log("reg new user fn");
    apiRegisterNewUser(this.state)
      //more to do below
      .then(res => {
        console.log("reg new user in Login comp ", res);
      });
  }

  registration() {
    this.setState({
      showRegistration: true
    });
  }

  login() {
    if (this.state.username && this.state.password) {
      getLoginData("/api/v1/login", this.state)
        .then(result => {
          console.log(result);
          if (result && result.body.status == "ok") {
            sessionStorage.setItem("userData", true);
            sessionStorage.setItem("name", result.body.name);
            this.props.setUserName(result.body.name);
            this.setState({ redirectToReferrer: true });
            //  route.location.push('/home');
          }
        })
        .catch(err => {
          alert(err, "Please check your email or password!");
        });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    if (this.state.redirectToReferrer) {
      return <Redirect to={"/home"} />;
    }

    return (
      <div className="login">
        <div>
          <h1>We've all been there, you are not alone.</h1>
          <h4>Login</h4>
          <form action="">
            <label>Username: </label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              required
              onChange={this.onChange}
            />
            <br />
            <label>Password: </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              onChange={this.onChange}
            />
          </form>
          <br />
          <button type="button" className="btn btn-info" onClick={this.login}>
            Login
          </button>

          <button
            type="button"
            className="btn btn-secondary"
            onClick={this.registration}
          >
            Registration
          </button>
        </div>
        {this.state.showRegistration && (
          <div className="register">
            <form action="">
              <label>Username: </label>
              <input
                type="text"
                name="newUsername"
                placeholder="Username"
                required
                onChange={this.onChange}
              />
              <br />
              <label>Password: </label>
              <input
                type="password"
                name="newPassword"
                placeholder="Password"
                required
                onChange={this.onChange}
              />
            </form>
            <button onClick={this.registerNewUser}>Register</button>
          </div>
        )}
      </div>
    );
  }
}

export default Login;
