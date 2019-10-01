import React, {Component} from 'react';


class ReservationForm extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            phone: '',
            attendees:'',
            email:'',
            further_information: ''
        }
        }
    render() {
        return (
    <div>
       <h1>Reservation Form</h1>
       <form onSubmit={this.onSubmit}>
           <input
           type="text"
           name="name"
           placeholder="Name"
           value={this.state.name}/>
               <input
           type="text"
           name="phone"
           placeholder="Phone"
           value={this.state.phone}/>
               <input
           type="text"
           name="attendees"
           placeholder="Attendees"
           value={this.state.attendees}/>
               <input
           type="text"
           name="email"
           placeholder="Email"
           value={this.state.email}/>
               <input
           type="text"
           name="further information"
           placeholder="Instructions"
           value={this.state.further_information}/>
</form>
       <input type="submit" value="submit" className="btn" />
    </div>
)
}
}

export default ReservationForm