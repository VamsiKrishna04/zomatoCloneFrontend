import React, { Component } from 'react';
import RestaurantInfo from './restaurantInfo';
import axios from 'axios';
import FilterSidebar from './filterSidebar';
import Header from './header';
import Footer from './footer';
class AllRestaurants extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityId: this.props.match.params.id,
            allRestaurants: [],
            start: 0,
            count: 20,
        };
        console.log(this.state.cityId);
    }


    fetchInitialRestaurants = () => {
        // console.log("Im fetchInitialRestaurants Start", this.state.start);
        // console.log("Im fetchInitialRestaurants end", this.state.count);
        axios
            .get(
                `https://developers.zomato.com/api/v2.1/search?entity_id=${this.state.cityId}&entity_type=city&start=${this.state.start}&count=${this.state.count}&apikey=beba7629d3801078244991a640a89072`
            )
            .then(res => {
                // console.log("Result", res);
                this.setState({
                    allRestaurants: res.data.restaurants,
                    allRestaurantsBackup: res.data.restaurants,
                });
            });
    }
    // Pagination Functions
    fetchPage1 = () => {
        // console.log("Page1");
        this.setState({
            start: 0,
        }, () => this.fetchInitialRestaurants());
    }

    fetchPage2 = () => {
        // console.log("Page2");
        this.setState({
            start: 20,
        }, () => this.fetchInitialRestaurants());
    }

    fetchPage3 = () => {
        // console.log("Page3");
        this.setState({
            start: 40,
        }, () => this.fetchInitialRestaurants());
    }

    fetchPage4 = () => {
        // console.log("Page4");
        this.setState({
            start: 60,
        }, () => this.fetchInitialRestaurants());
    }

    fetchPage5 = () => {
        // console.log("Page5");
        this.setState({
            start: 80,
        }, () => this.fetchInitialRestaurants());
    }

    // Filter Functions

    // Sort By Rating
    filterByRating = () => {
        // console.log("Filter By Rating");
        this.setState({
            allRestaurants: this.state.allRestaurants.sort(function (restaurantObj1, restaurantObj2) {
                return parseFloat(restaurantObj2.restaurant.user_rating.aggregate_rating) - parseFloat(restaurantObj1.restaurant.user_rating.aggregate_rating)
            })
        });
    }

    filterByCostDescending = () => {
        // console.log("filterByCostDescending");
        this.setState({
            allRestaurants: this.state.allRestaurants.sort(function (restaurantObj1, restaurantObj2) {
                return parseInt(restaurantObj2.restaurant.average_cost_for_two) - parseInt(restaurantObj1.restaurant.average_cost_for_two)
            })
        });
    }

    filterByCostAscending = () => {
        // console.log("filterByCostAscending");
        this.setState({
            allRestaurants: this.state.allRestaurants.sort(function (restaurantObj1, restaurantObj2) {
                return parseInt(restaurantObj1.restaurant.average_cost_for_two) - parseInt(restaurantObj2.restaurant.average_cost_for_two)
            })
        });
    }

    filterByCuisine = (cuisineType) => {
        // console.log("filterByCuisine");
        this.setState({
            allRestaurants: this.state.allRestaurants.filter(restaurantObj => {
                return restaurantObj.restaurant.cuisines.split(",").includes(cuisineType) || restaurantObj.restaurant.cuisines.split(",").includes(" " + cuisineType)
            })
        });
    }

    filterByCost = (min, max) => {
        // console.log("Min:", min)
        // console.log("filterByCost");
        this.setState({
            allRestaurants: this.state.allRestaurants.filter(restaurantObj => {
                return parseInt(restaurantObj.restaurant.average_cost_for_two) >= min && parseInt(restaurantObj.restaurant.average_cost_for_two) <= max;
            })
        });
    }

    removeAllFilters = () => {
        this.setState({
            allRestaurants: this.state.allRestaurantsBackup,
        })
    }

    componentDidMount() {
        this.fetchInitialRestaurants();
    }

    render() {
        return (
            <>
                <Header />
                <div className="container" >
                    <div className="row">
                        <FilterSidebar
                            filterByRating={this.filterByRating}
                            filterByCostAscending={this.filterByCostAscending}
                            filterByCostDescending={this.filterByCostDescending}
                            filterByCuisine={this.filterByCuisine}
                            filterByCost={this.filterByCost}
                            removeAllFilters={this.removeAllFilters}
                        />
                        <div className="col-9 all-restaurants">
                            {
                                this.state.allRestaurants.map(obj => {
                                    return <RestaurantInfo
                                        key={obj.restaurant.R.res_id}
                                        {...obj}
                                    />
                                })
                            }
                        </div>
                    </div>
                    <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-center">
                            <li className="page-item"><a className="page-link" href="#" onClick={this.fetchPage1}>1</a></li>
                            <li className="page-item"><a className="page-link" href="#" onClick={this.fetchPage2}>2</a></li>
                            <li className="page-item"><a className="page-link" href="#" onClick={this.fetchPage3}>3</a></li>
                            <li className="page-item"><a className="page-link" href="#" onClick={this.fetchPage4}>4</a></li>
                            <li className="page-item"><a className="page-link" href="#" onClick={this.fetchPage5}>5</a></li>
                        </ul>
                    </nav>
                </div>
                <Footer />
            </>
        );
    }
}

export default AllRestaurants;
