import React, { Component } from "react";

export class LoginSignupButton extends Component {
  render() {
    return (
      <div>
        <button className="btn mr-4 d-md-inline-block login login-signup">
          Log in
        </button>
        <button className="btn btn-default d-md-inline-block px-4 signup login-signup">
          Create an account
        </button>
      </div>
    );
  }
}

export default LoginSignupButton;
