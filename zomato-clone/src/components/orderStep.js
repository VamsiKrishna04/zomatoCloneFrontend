import React, { Component } from "react";
import deliverySvg from "../delivery.svg";
import menuSvg from "../menu.svg";
import notificationSvg from "../notification.svg";

export class option extends Component {
  render() {
    return (
      <div className="container my-5">
        <h3 className="m-0">How Zomato works</h3>
        <p className="mb-3">Ordering food online has never been this easy</p>
        <div className="row">
          <div className="col-sm">
            <div className="steps-image">
              <img
                src={deliverySvg}
                alt="Explore restaurants that deliver to your doorstepzomato"
              />
            </div>
            <div className="order-steps-text">
              <strong>Explore restaurants</strong> that deliver to your doorstep
            </div>
          </div>
          <div className="col-sm">
            <div className="steps-image">
              <img
                src={menuSvg}
                alt="Explore restaurants that deliver to your doorstepzomato"
              />
            </div>
            <div className="order-steps-text">
              Browse menus and <strong>build your order</strong> in seconds
            </div>
          </div>
          <div className="col-sm">
            <div className="steps-image">
              <img
                src={notificationSvg}
                alt="Explore restaurants that deliver to your doorstepzomato"
              />
            </div>
            <div className="order-steps-text">
              Follow the status of your order with{" "}
              <strong>real-time alerts</strong>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default option;
