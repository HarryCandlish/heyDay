import React, {Component} from 'react';

import eventsListStyles from '../modules/eventsListStyles.module.scss'


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
    render() {
        return (
    <div>
        <ul>
            {this.state.events.map(event => (
                    <li key={event.id}>
                <h1>{event.title}</h1>
                <img className={eventsListStyles.eventsImage} alt="event" src={event.image}/>
                <p>{event.description}</p>
                <p>{event.date}</p>
                </li>
            ))}
        </ul>
    </div>
)
}
}

export default EventsList