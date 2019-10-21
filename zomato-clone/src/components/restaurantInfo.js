import React from 'react';

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
                                        <h2><a href="#">{restaurant.name}</a></h2>
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
                                CUISINES:
                            </div>
                            <div className="col-9">
                                {restaurant.cuisines}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                COST FOR TWO:
                            </div>
                            <div className="col-9">
                                ₹{restaurant.average_cost_for_two}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                HOURS:
                            </div>
                            <div className="col-9">
                                {restaurant.timings}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RestaurantInfo;