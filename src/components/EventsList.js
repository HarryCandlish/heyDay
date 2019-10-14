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
    render() 
        {

            var els = eventsListStyles

        return (
    <div>
        <ul className={els.container} >
                {this.state.events.map(event => (
                    <li>key={event.id}>
                     
                <h1 className={els.itemTitle}>{event.title}</h1>
                <p>{event.description}</p>
                <p>{event.date}</p>
           
                <div>
                <img className={els.itemImage} alt="event" src={event.image}/>
                </div>
                </li>
            ))}
        </ul>
        </div>

)
}
}

export default EventsList