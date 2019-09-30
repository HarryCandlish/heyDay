import React, {Component} from 'react';

import BeerList from '../components/BeerList'

class Home extends Component {
    render() {
        return (
    <div>
        <h1>Hey Day</h1>
        <h2>Pouring Now</h2>
        <BeerList/>
    </div>
)
}
}

export default Home