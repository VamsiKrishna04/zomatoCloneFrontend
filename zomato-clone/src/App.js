import Header from "./components/header";
import Hero from "./components/hero";
import Option from "./components/orderStep";
import Footer from "./components/footer";
import { Route, BrowserRouter as Router } from "react-router-dom";
import City from "./components/City";
import "./App.css";
import React, { Component } from "react";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { address: "" };
    this.handleChange = this.handleChange.bind(this);
  }
  getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    }
  };
  showPosition = position => {
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);

    axios
      .get(
        `https://developers.zomato.com/api/v2.1/geocode?lat=${position.coords.latitude}&lon=${position.coords.longitude}&apikey=e959162dcd6f277645d33bdb151d281d`
      )
      .then(res => {
        cityName = res.data.location.city_name;
        this.setState({ address: cityName });
      });
  };
  handleChange(event) {
    this.setState({ address: event.target.value });
  }
  render() {
    return (
      <div>
        <>
          <Router>
            <Route exact path="/">
              <Header />
              <Hero
                address={this.state.address}
                handleChange={this.handleChange}
              />
              <Option />
              <Footer />
            </Route>
            <Route exact path="/:address">
              <City />
            </Route>
          </Router>
        </>
      </div>
    );
  }
}

export default App;
