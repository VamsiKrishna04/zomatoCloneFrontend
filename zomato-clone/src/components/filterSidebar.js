import React from 'react';

function FilterSidebar(props) {
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
                                    <a href="#">Rating - high to low</a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <a href="#">Cost - high to low</a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <a href="#">Cost - low to high</a>
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
                                    <a href="#">North Indian</a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <a href="#">Chinese</a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <a href="#">South Indian</a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <a href="#">Biryani</a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <a href="#">Desserts</a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <a href="#">Continental</a>
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
                                    <a href="#">Less than ₹250</a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <a href="#">₹250 to ₹500</a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <a href="#">₹500 to ₹1,000</a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <a href="#">₹1,000 to ₹1,500</a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <a href="#">₹1,500 to ₹2,500</a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <a href="#">₹2,500 +</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FilterSidebar;