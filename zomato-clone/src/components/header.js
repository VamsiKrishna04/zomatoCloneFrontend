import React, { Component } from "react";
import zomatoSvg from "../zomato.svg";
import LoginSignupButton from "./LoginSignupButton";

export class header extends Component {
  render() {
    return (
      <nav className="site-header">
        <div className="container d-flex flex-column py-2 flex-md-row justify-content-between">
          <img src={zomatoSvg} alt="zomato" />
          <LoginSignupButton />
        </div>
      </nav>
    );
  }
}

export default header;
