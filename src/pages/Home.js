import React, {Component} from 'react';

import BeerList from '../components/BeerList'
import EventsList from '../components/EventsList'
import OurStory from "../components/OurStory"
import FoodMenu from "../components/FoodMenu"

class Home extends Component {
    render() {
        return (
    <div>
        <OurStory/>
        <BeerList/>
        <FoodMenu/>
        <EventsList/>
    </div>
)
}
}

export default Home