import React, {Component} from 'react';


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
                </li>
            ))}
        </ul>
    </div>
)
}
}

export default EventsList