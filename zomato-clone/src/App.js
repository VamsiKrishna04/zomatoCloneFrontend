import Header from "./components/header";
import Hero from "./components/hero";
import Option from "./components/orderStep";
import Footer from "./components/footer";
import { Route, BrowserRouter as Router } from "react-router-dom";
import City from "./components/City";
import "./App.css";
import React, { Component } from "react";
import {Provider} from 'react-redux';
import store from './components/store/store'

export class App extends Component {
  render() {
    return (<Provider store={store}>
      <div>
          <Router>
            <Route exact path="/">
              <Header />
              <Hero/>
              <Option />
              <Footer />
            </Route>
            <Route exact path="/:address">
              <City />
            </Route>
          </Router>
      </div></Provider>
    );
  }
}

export default App;
