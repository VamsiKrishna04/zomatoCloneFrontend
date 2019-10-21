import React, { Component } from "react";
import LoginSignupButton from "./LoginSignupButton";
import zomatoSvg from "../zomato_flat_bg_logo.svg";
import {connect} from 'react-redux'
import {getLocationFromRoute} from './actions/getLocationAction'
import {withRouter} from 'react-router';
import {compose} from 'redux'
// import axios from "axios";

export class City extends Component {
componentDidMount() {
  this.props.getLocationFromRoute(this.props.match.params.address)
} 
  render() { 
  console.log(this.props.city_id)
    return (
      <div className="full-bg">
        <div className="city-page-bg">
          <div className="overlay pt-2 pb-5">
            <div className="container">
              <div className="text-right">
                <LoginSignupButton />
              </div>
              <img src={zomatoSvg} className="zomato-svg mt-5" alt="zomato" />
              <h1 className="city-home-title text-white mt-5">
                Find the best restaurants, cafés, and bars in Bengaluru{" "}
              </h1>
              <div className="row mx-auto well mt-5 col-lg-12">
                <div className="col-xs-4 pr-0 city-container">
                  <select
                    id="select_id"
                    className="form-control select-city form-control-lg"
                    style={{ fontSize: "1.2rem" }}
                  >
                    <option value="" disabled>
                      Select your city
                    </option>
                    <option defaultValue="1">Bengaluru</option>
                  </select>
                  <i
                    className="fa fa-map-marker location"
                    aria-hidden="true"
                  ></i>
                  <i
                    className="fa fa-caret-down dropdown-icon"
                    aria-hidden="true"
                  ></i>
                </div>
                <div className="col-xs-6 pr-0 location-text">
                  <input
                    id="getText"
                    type="text"
                    className="form-control pl-5 h-100"
                    placeholder="Search for restaurants or cuisines..."
                    // value={this.state.address}
                    // onChange={this.handleChange}
                  />
                  <i className="fa fa-search" aria-hidden="true"></i>
                </div>
                <span
                  //   to={`/${this.state.address}`}
                  className="btn btn-success col-xs-2 search-button d-flex align-items-center justify-content-center"
                >
                  Search
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="container d-flex pt-5 pb-5">
          <div className="col-8">
            <div className="text-left">
              <b>Collections</b>
            </div>
          </div>
          <div className="col-4">ccocoo</div>
        </div>
      </div>
    );
  }
}
const mapStateToprops=(state)=>
{
  
  return {
    address:state.location.address,
    city_id:state.location.city_id
  }
}

export default compose( withRouter,connect(mapStateToprops,{getLocationFromRoute}))(City)