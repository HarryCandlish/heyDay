import React, {Component} from 'react';

import ReservationForm from '../components/ReservationForm'

class Reservation extends Component {
    render() {
        return (
    <div>
       <h1>Make Reservation</h1>
       <ReservationForm/>
    </div>
)
}
}

export default Reservation