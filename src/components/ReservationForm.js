import React, {Component} from 'react';


class ReservationForm extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            date:'',
            phone: '',
            attendees:'',
            email:'',
            further_information: ''}

            this.handleChange = this.handleChange.bind(this);
        }
        
            handleChange(event) {
                this.setState({value: event.target.value})
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
           value={this.state.name}
           onChange={this.handleChange} />
              <input
           type="text"
           name="date"
           placeholder="Date"
           value={this.state.date}
           onChange={this.handleChange} />
               <input
           type="text"
           name="phone"
           placeholder="Phone"
           value={this.state.phone}
           onChange={this.handleChange} />
               <input
           type="text"
           name="attendees"
           placeholder="Attendees"
           value={this.state.attendees}
           onChange={this.handleChange} />
               <input
           type="text"
           name="email"
           placeholder="Email"
           value={this.state.email}
           onChange={this.handleChange} />
               <input
           type="text"
           name="further information"
           placeholder="Instructions"
           value={this.state.further_information}
           onChange={this.handleChange} />
</form>
       <input type="submit" value="submit" className="btn" />
    </div>
)
}
}

export default ReservationForm