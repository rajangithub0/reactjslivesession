
import React from "react";
import "./App.css";
const { Component } = React;

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: "signUp",
      value: ""
    };
  }
  changeView = (view) => {
    this.setState({
      currentView: view
    });
  };
  clickHandle = (e) => {
    console.log(this.state.value, "hey");
  };
  ChangeHandler = (e) => {
    this.setState({
      value: e.target.value
    });
    console.log(e.target.value);
  };
  currentView = () => {
    // console.log(this.state.currentView);
    switch (this.state.currentView) {
      case "signUp":
        return (
          <form>
            <h2>Sign Up!</h2>
            <fieldset>
              <legend>Create Account</legend>
              <ul>
                <li>
                  <label htmlFor="username">Username:</label>
                  <input
                    type="text"
                    id="username"
                    onChange={(e) => this.ChangeHandler(e)}
                    value={this.state.value}
                    required
                  />
                </li>
                <li>
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    onChange={(e) => this.ChangeHandler(e)}
                    value={this.state.value[`email`]}
                    required
                  />
                </li>
                <li>
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    id="password"
                    value={this.state.value[`password`]}
                    onChange={(e) => this.ChangeHandler(e)}
                    required
                  />
                </li>
              </ul>
            </fieldset>
            <button
              onClick={(e) => {
                console.log(e.target.value);
                this.clickHandle();
              }}
            >
              Submit
            </button>
            <a
              className="Link"
              type="button"
              onClick={() => this.changeView("logIn")}
            >
              Have an Account?
            </a>
          </form>
        );

      case "logIn":
        return (
          <form>
            <h2>Welcome Back!</h2>
            <fieldset>
              <legend>Log In</legend>
              <ul>
                <li>
                  <label htmlFor="username">Username:</label>
                  <input type="text" id="username" required />
                </li>
                <li>
                  <label htmlFor="password">Password:</label>
                  <input type="password" id="password" required />
                </li>
                <li>
                  <i />
                  <button onClick={() => this.changeView("PWReset")} href="#">
                    Forgot Password?
                  </button>
                </li>
              </ul>
            </fieldset>
            <button>Login</button>
            <button type="button" onClick={() => this.changeView("signUp")}>
              Create an Account
            </button>
          </form>
        );
      case "PWReset":
        return (
          <form>
            <h2>Reset Password</h2>
            <fieldset>
              <legend>Password Reset</legend>
              <ul>
                <li>
                  <em>A reset link will be sent to your inbox!</em>
                </li>
                <li>
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" required />
                </li>
              </ul>
            </fieldset>
            <button href="">Send Reset Link</button>
            <button type="button" onClick={() => this.changeView("logIn")}>
              Go Back
            </button>
          </form>
        );
      default:
        break;
    }
  };

  render() {
    return <section id="entry-page">{this.currentView()}</section>;
  }
}

export default LoginPage;
