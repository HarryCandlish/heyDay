import React, {Component} from 'react';


class ReservationForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            date:'',
            phone: '',
            attendees:'',
            email:'',
            further_information: ''}

            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }
        
         handleChange = e => this.setState({[e.target.name]: e.target.value})

         handleSubmit = e => {
            alert('hello')
            e.preventDefault()
         }
            

    render() {
        let { name, date, phone } = this.state
        return (
    <div>
       <h1>Reservation Form</h1>
       <form onSubmit={this.handleSubmit} >
           <input
           type="text"
           name="name"
           placeholder="Name"
           value={name}
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
                <input type="submit" value="submit"/>
</form>
   
    </div>
)
}
}

export default ReservationForm