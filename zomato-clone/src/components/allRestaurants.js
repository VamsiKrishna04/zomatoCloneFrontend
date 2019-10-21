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
        };
        console.log(this.state.cityId);
    }

    componentDidMount() {
        axios
            .get(
                `https://developers.zomato.com/api/v2.1/search?entity_id=${this.state.cityId}&entity_type=city&start=0&count=20&apikey=beba7629d3801078244991a640a89072`
            )
            .then(res => {
                this.setState({
                    allRestaurants: res.data.restaurants,
                });
            });
    }

    render() {
        return (
            <div className="container">
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
            </div>
        );
    }
}

export default AllRestaurants;
