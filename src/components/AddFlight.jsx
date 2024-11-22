import React, { Component } from 'react';
import FlightServices from '../services/FlightServices';


class AddFlight extends Component {
    

    constructor(props){
        super(props);
        this.historyRef = React.createRef();
        this.state = {
            flightName: '',
            source: '',
            destination:'',
            ticketPrice: ''
        }

        this.changeFlightNameHandler = this.changeFlightNameHandler.bind(this);
        this.changeSourceHandler = this.changeSourceHandler.bind(this);
        this.changeDestinationHandler = this.changeDestinationHandler.bind(this);
        this.changeTicketPriceHandler = this.changeTicketPriceHandler.bind(this);
        this.saveFlight = this.saveFlight.bind(this);
        
    }

    

    changeFlightNameHandler= (event) =>{
        this.setState({flightName: event.target.value});
    }
    changeSourceHandler= (event) =>{
        this.setState({source: event.target.value});
    }
    changeDestinationHandler= (event) =>{
        this.setState({destination: event.target.value});
    }
    changeTicketPriceHandler= (event) =>{
        this.setState({ticketPrice: event.target.value});
    }

    saveFlight= (e) =>{
        e.preventDefault();
        let flight = {flightName : this.state.flightName, source: this.state.source, destination: this.state.destination, ticketPrice: this.state.ticketPrice}
        console.log('flight =>' + JSON.stringify(flight));
        FlightServices.createFlight(flight).then(res=>{
            // this.props.history.push('flights');
            // this.historyRef.current.push('/flights');
            alert(" Flight Added!!!")
            window.location.href = '/flights';
        });
    }

    cancel(){
        // this.props.history.push('/flights');
    }

    render() {
        return (
            <div className='container'>
                 
               <div className='card col-md-6 offset-md-3 offset-md-3 p-4 mt-5'>
                    <h1>Add Flight</h1>
                    <div className="card-body">
                        <form className=''>
                            <div className="mb-3">
                                <label htmlFor="flightName" className="form-label">Flight Name</label>
                                <select className="form-select" id="flightName" name='flightName' value={this.state.flightName} onChange={this.changeFlightNameHandler} required>
                                    <option value="">Select Airline..</option>
                                    <option value="Vistara">Vistara</option>
                                    <option value="Air-Emirates">Air-Emirates</option>
                                    <option value="Qatar Airways">Qatar Airways</option>
                                    <option value="Air-India">Air-India</option>
                                    <option value="Indigo">Indigo</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="source" className="form-label">Source</label>
                                <select className="form-select" id="source" name='source' value={this.state.source} onChange={this.changeSourceHandler} required>
                                    <option selected>Select Source..</option>
                                    <option value="Pune">Pune</option>
                                    <option value="Mumbai">Mumbai</option>
                                    <option value="Chennai">Chennai</option>
                                    <option value="Delhi">Delhi</option>
                                    <option value="Kolkata">Kolkata</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="destination" className="form-label">Destination</label>
                                <select className="form-select" id="destination" name='destination' value={this.state.destination} onChange={this.changeDestinationHandler} required>
                                    <option selected>Select Destination..</option>
                                    <option value="Chicago">Chicago</option>
                                    <option value="New-York">New-York</option>
                                    <option value="Seoul">Seoul</option>
                                    <option value="Vienna">Vienna</option>
                                    <option value="Dubai">Dubai</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="ticketPrice" className="form-label">Ticket Price</label>
                                <input 
                                    type="number" 
                                    className="form-control" 
                                    id="ticketPrice"
                                    name="ticketPrice" 
                                    value={this.state.ticketPrice} 
                                    onChange={this.changeTicketPriceHandler}  
                                    required
                                />
                            </div>
                            
                            <button type="submit" className="btn btn-primary" onClick={this.saveFlight}>Add</button>
                            <button type="reset" className="btn btn-danger mx-3" onClick={this.cancel.bind(this)}>Cancel</button>
                        </form>
                    </div>
               </div>
            </div>
        );
    }
}

export default AddFlight;