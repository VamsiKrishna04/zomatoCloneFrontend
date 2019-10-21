import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

function RestaurantInfo({ restaurant }) {

    return (
        <div className="row">
            <div className="col">
                <div className="card mb-3">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-3">
                                <img src={restaurant.thumb} className="rounded" alt="Hotel" height="120" />
                            </div>
                            <div className="col-6">
                                <div className="row">
                                    <div className="col">
                                        <Link to={`/bangalore/restaurant/${restaurant.id}`}><h3>{restaurant.name}</h3></Link>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <b>{restaurant.location.locality}</b>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        {restaurant.location.address}
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="row">
                                    <div className="col">
                                        <span className="badge badge-success">{restaurant.user_rating.aggregate_rating}</span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        {restaurant.user_rating.votes}votes
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-3">
                                <b>CUISINES:</b>
                            </div>
                            <div className="col-9">
                                {restaurant.cuisines}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <b>COST FOR TWO:</b>
                            </div>
                            <div className="col-9">
                                ₹{restaurant.average_cost_for_two}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <b>HOURS:</b>
                            </div>
                            <div className="col-9">
                                {restaurant.timings}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default RestaurantInfo;