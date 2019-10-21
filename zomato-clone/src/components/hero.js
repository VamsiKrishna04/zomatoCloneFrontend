import React, { Component } from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
import {getLocation} from './actions/getLocationAction'

export class Hero extends Component {
  getMyLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    }
  };

  showPosition = position => {console.log("ssssss");
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
let coordinates={
  latitude:position.coords.latitude,
  longitude:position.coords.longitude
}
// console.log('thweese aere thai',coordinates)
  this.props.getLocation(coordinates)
  };
  render() {
    console.log('this  is props',this.props)
    return (
      <div className="hero-img">
        <div className="container text-left text-white">
          <h1 className="m-0">Order Food Online</h1>
          <p className="m-0" style={{ fontSize: "1.2em" }}>
            Best restaurants in Akola delivering to your doorstep
          </p>
          <div className="row mx-auto well col-lg-12 h-search">
            <div className="col-xs-4 pr-0 h-100 city-container">
              <select
                id="select_id"
                className="form-control select-city form-control-lg"
                style={{ fontSize: "1.2rem" }}
              >
                <option value="" disabled>
                  Select your city
                </option>
                <option defaultValue="1">Bengaluru</option>
                <option value="2">Mumbai</option>
                <option value="3">Delhi</option>
                <option value="4">Hyderabad</option>
                <option value="5">Pune</option>
              </select>
              <i className="fa fa-map-marker location" aria-hidden="true"></i>
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
                placeholder="Type delivery location here..."
                value={this.props.address}
              />
              <div className="input-separator"></div>
              <i className="fa fa-location-arrow" aria-hidden="true"></i>
              <button
                className="btn col-xs-2 auto-detect-button"
                style={{ fontSize: "1.2em", color: "grey" }}
                onClick={this.getMyLocation}
              >
                Detect
                <i className="fa ml-2 fa-crosshairs"></i>
              </button>
              <p id="demo"></p>
            </div>
            <Link
              to={`/${this.props.address}`}
              className="btn btn-success col-xs-2 search-button d-flex align-items-center justify-content-center"
            >
              Search
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToprops=(state,ownProps)=>
{
  
  return {
    address:state.location.address,
    city_id:state.location.city_id
  }
}



export default connect(mapStateToprops,{getLocation})(Hero)
