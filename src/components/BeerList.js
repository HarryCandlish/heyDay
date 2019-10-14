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

        var bls = beerListStyles

        return (
    <div>
        <h1 className={bls.title}>Now Pouring</h1>
        <ul className={bls.container}>
            {this.state.beers.map((beer) => {
                if (beer.pouring_now === true) {
                return (
                    <li className={bls.item} key={beer.id}>
                    <img alt='beers'className={bls.beers} src={beer.image}/>
                </li>)
            }})}
        </ul>
    </div>
)
}
}

export default BeerList