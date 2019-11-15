import React, {Component} from 'react';

import styles from '../modules/beerListStyles.module.scss'

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
                <div className={styles.titleContainer}>
                <h1 className={styles.title}>Now Pouring</h1>
                <p className={styles.brewers}>Our beers are made with the finest ingredients, 
                    and made in the very same place we sell it. 
                    Our brewer Sam and Sammi brew the beer they love to drink and that's how we want to keep it.</p>
                    </div>
                <ul className={styles.container}>
                    {this.state.beers.map((beer) => {
                        if (beer.pouring_now === true) {
                            return (
                                <li className={styles.item} key={beer.id}>
                                    <img alt='beers'className={styles.beers} src={beer.image}/>
                                </li>
                            )
                        }
                    })}
                </ul>
            </div>
        )
    }
}

export default BeerList