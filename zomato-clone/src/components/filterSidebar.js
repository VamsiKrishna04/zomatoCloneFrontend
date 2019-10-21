import React from 'react';

function FilterSidebar(props) {

    const filterCuisines = (cuisineType) => {
        return props.filterByCuisine(cuisineType)
    }

    const filterByMinMaxCost = (min, max) => {
        return props.filterByCost(min, max)
    }

    return (
        <div className="col">
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col">
                            <b>Filters</b>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="row">
                                <div className="col">
                                    <b>Sort by</b>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <a href="#" onClick={props.filterByRating}>Rating - high to low</a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <a href="#" onClick={props.filterByCostDescending}>Cost - high to low</a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <a href="#" onClick={props.filterByCostAscending}>Cost - low to high</a>
                                    <hr />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="row">
                                <div className="col">
                                    <b>Cuisine</b>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <a href="" onClick={(e) => { e.preventDefault(); filterCuisines("North Indian") }}> North Indian</a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <a href="" onClick={(e) => { e.preventDefault(); filterCuisines(" Chinese") }}>Chinese</a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <a href="" onClick={(e) => { e.preventDefault(); filterCuisines("South Indian") }}>South Indian</a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <a href="" onClick={(e) => { e.preventDefault(); filterCuisines("Biryani") }}>Biryani</a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <a href="" onClick={(e) => { e.preventDefault(); filterCuisines("Desserts") }}>Desserts</a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <a href="" onClick={(e) => { e.preventDefault(); filterCuisines("Continental") }}>Continental</a>
                                    <hr />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="row">
                                <div className="col">
                                    <b>Cost for two</b>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <a href="" onClick={(e) => { e.preventDefault(); filterByMinMaxCost(0, 249) }}> Less than ₹250</a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <a href="" onClick={(e) => { e.preventDefault(); filterByMinMaxCost(250, 500) }}>₹250 to ₹500</a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <a href="" onClick={(e) => { e.preventDefault(); filterByMinMaxCost(500, 1000) }}>₹500 to ₹1,000</a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <a href="" onClick={(e) => { e.preventDefault(); filterByMinMaxCost(1000, 1500) }}>₹1,000 to ₹1,500</a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <a href="" onClick={(e) => { e.preventDefault(); filterByMinMaxCost(1500, 2500) }}>₹1,500 to ₹2,500</a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <a href="" onClick={(e) => { e.preventDefault(); filterByMinMaxCost(2500, 5000) }}>₹2,500 +</a>
                                    <hr />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <a href="" onClick={props.removeAllFilters}>Remove All Filters</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FilterSidebar;