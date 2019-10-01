import React, {Component} from 'react';

import BeerList from '../components/BeerList'
import EventsList from '../components/EventsList'

class Home extends Component {
    render() {
        return (
    <div>
        <h1>Hey Day</h1>
        <BeerList/>
        <h1>Events</h1>
        <EventsList/>
    </div>
)
}
}

export default Home