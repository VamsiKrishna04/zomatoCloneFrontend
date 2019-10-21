import React, { Component } from "react";
import axios from 'axios';
import Review from './review';
import Header from './header';
import Footer from './footer';

class Restaurant extends Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurantId: this.props.match.params.id,
            restaurantImage: '',
            restaurantName: '',
            restaurantLocality: '',
            restaurantRating: '',
            votes: '',
            phoneNumbers: [],
            openingHours: '',
            cuisines: '',
            address: '',
            averageCost: '',
            latitude: '',
            longitude: '',
            reviews: [],
        };
    }

    setStateOfRestaurantData = (restaurant) => {
        this.setState({
            restaurantImage: restaurant.data.thumb,
            restaurantName: restaurant.data.name,
            restaurantLocality: restaurant.data.location.locality,
            restaurantRating: restaurant.data.user_rating.aggregate_rating,
            votes: restaurant.data.user_rating.votes,
            phoneNumbers: restaurant.data.phone_numbers.split(","),
            openingHours: restaurant.data.timings,
            cuisines: restaurant.data.cuisines,
            address: restaurant.data.location.address,
            averageCost: restaurant.data.average_cost_for_two,
            latitude: restaurant.data.location.latitude,
            longitude: restaurant.data.location.longitude,
            reviews: restaurant.data.all_reviews.reviews,
        });
        // console.log("Project State", this.state);
    }

    componentDidMount() {
        // console.log("In didmount", this.state.restaurantId);
        axios
            .get(
                `https://developers.zomato.com/api/v2.1/restaurant?res_id=${this.state.restaurantId}&apikey=beba7629d3801078244991a640a89072`
            )
            .then(res => {
                this.setStateOfRestaurantData(res);
            });
    }

    render() {
        // console.log("Restaurant id:", this.props.match.params.id);
        // const restaurantId = this.props.match.params.id;
        // console.log("Restaurant Image in Render", this.state.restaurantImage);
        let { restaurantImage, restaurantName, restaurantLocality, restaurantRating,
            votes, phoneNumbers, openingHours, cuisines, address, averageCost, latitude, longitude } = this.state;
        return (
            <>
            <Header />
            <div className="container">
                <div className="card mb-3">
                    <img id="hotelPicture" className="img-fluid"
                        src={restaurantImage} alt="Restaurant" />
                    <div className="card-body">
                        <div className="row">
                            <div className="col-6">
                                <h3 className="card-title">{restaurantName}</h3>
                            </div>
                            <div className="col-6">
                                <span className="badge badge-success"><b>{restaurantRating}</b>/5</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <p className="card-text">{restaurantLocality}</p>
                            </div>
                            <div className="col-6">
                                <p className="card-text"><small className="text-muted">{votes} votes</small></p>
                            </div>
                        </div>
                        <hr />
                        <button type="button" className="btn btn-light btn-outline-secondary"><i className="fa fa-bookmark"></i>
                            Bookmark</button>
                        <button type="button" className="btn btn-light btn-outline-secondary"><i className="fa fa-pencil"></i>
                            Add a Review</button>
                        <button type="button" className="btn btn-light btn-outline-secondary"><i
                            className="fa fa fa-address-book-o"></i>
                            Add to Collection</button>
                    </div>
                </div>
                <div className="card mb-3">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-6">
                                <h4>Phone Numbers</h4>
                                {
                                    phoneNumbers.map(phoneNumber => {
                                        return <p>{phoneNumber}</p>;
                                    })
                                }
                            </div>
                            <div className="col-6">
                                <h4>Opening hours</h4>
                                {openingHours}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <h4>Cuisines</h4>
                                {cuisines}
                            </div>
                            <div className="col-6">
                                <h4>Address</h4>
                                {address}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <h4>Average Cost</h4>
                                Rs.{averageCost}
                            </div>
                            <div className="col-6">
                                {latitude},{longitude}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3">
                    <div className="card-body">
                        <div className="row">
                            <div className="col">
                                <h3 className="card-title">Write a Review</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1"><i className="fa fa-pencil"></i></span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="Share Your Experience"
                                        aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <button type="button" className="btn btn-success">Add Your review</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="all-reviews">{
                    this.state.reviews.map(obj => {
                        return <Review
                            key={obj.review.id}
                            {...obj}
                        />
                    })
                }
                </div>
            </div>
            <Footer />
            </>
        );
    }
}

export default Restaurant;
