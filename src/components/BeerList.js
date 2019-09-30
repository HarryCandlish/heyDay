import React, {Component} from 'react';

import beerListStyles from '../modules/beerListStyles.module.scss'

class BeerList extends Component {
    constructor() {
        super()
        this.state = {
            beers: []
        };
    }
    
    componentDidMount() {
        fetch("/api/beers")
        .then(res => res.json())
        .then(beers => this.setState({beers}, () => console.log("beers", beers)))
    }
    render() {
        return (
    <div>
        <h1>Beers</h1>
        <ul>
            {this.state.beers.map((beer) => {
                if (beer.pouring_now === true) {
                return (
                    <li key={beer.id}>
                    <img alt='beers'className={beerListStyles.beers} src={beer.image}/>
                </li>)
            }})}
        </ul>
    </div>
)
}
}

export default BeerList