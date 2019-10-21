import React, { Component } from 'react';
import RestaurantInfo from './restaurantInfo';
import axios from 'axios';
import FilterSidebar from './filterSidebar';

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
        console.log("Im fetchInitialRestaurants Start", this.state.start);
        console.log("Im fetchInitialRestaurants end", this.state.count);
        axios
            .get(
                `https://developers.zomato.com/api/v2.1/search?entity_id=${this.state.cityId}&entity_type=city&start=${this.state.start}&count=${this.state.count}&apikey=beba7629d3801078244991a640a89072`
            )
            .then(res => {
                console.log("Result", res);
                this.setState({
                    allRestaurants: res.data.restaurants,
                });
            });
    }

    fetchPage1 = () => {
        console.log("Page1");
        this.setState({
            start: 0,
        }, () => this.fetchInitialRestaurants());
    }

    fetchPage2 = () => {
        console.log("Page2");
        this.setState({
            start: 20,
        }, () => this.fetchInitialRestaurants());
    }

    fetchPage3 = () => {
        console.log("Page3");
        this.setState({
            start: 40,
        }, () => this.fetchInitialRestaurants());
    }

    fetchPage4 = () => {
        console.log("Page4");
        this.setState({
            start: 60,
        }, () => this.fetchInitialRestaurants());
    }

    fetchPage5 = () => {
        console.log("Page5");
        this.setState({
            start: 80,
        }, () => this.fetchInitialRestaurants());
    }

    componentDidMount() {
        this.fetchInitialRestaurants();
    }

    render() {
        return (
            <div className="container" >
                <div className="row">
                    <FilterSidebar />
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
        );
    }
}

export default AllRestaurants;
