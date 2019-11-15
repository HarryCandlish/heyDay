import React, {Component} from 'react';

import styles from '../modules/eventsListStyles.module.scss'


class EventsList extends Component {
    constructor() {
        super()
        this.state = {
            events: []
        };
    }
    
    componentDidMount() {
        fetch("/api/events")
        .then(res => res.json())
        .then(events => this.setState({events}, () => console.log("events", events)))
    }
    render() 
        {

        return (
    <div>
        <ul className={styles.container} >
                {this.state.events.map(event => (
                    <li className={styles.itemList} key={event.id}>
                     <h1 className={styles.itemTitle}>{event.title}</h1>
                     <p>{event.description}</p>
                     <p>{event.date}</p>
                     {/* <img className={els.itemImage} alt="event" src={event.image}/> */}
                </li>
            ))}
        </ul>
        </div>

)
}
}

export default EventsList