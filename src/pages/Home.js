import React, {Component} from 'react';

import BeerList from '../components/BeerList'
import EventsList from '../components/EventsList'
import OurStory from "../components/OurStory"
import FoodMenu from "../components/FoodMenu"

import heyday from "../images/beers.jfif"

import styles from '../modules/homeStyles.module.scss'

class Home extends Component {
    render() {
        return (
    <div>
        <div>
            <img className={styles.main} src={heyday} alt='hey day'/>
        </div>
        <OurStory/>
        <BeerList/>
        <FoodMenu/>
        <EventsList/>
    </div>
)
}
}

export default Home