import React, { Component } from 'react';
import FlightServices from '../services/FlightServices';
// import { withRouter } from 'react-router-dom';

class UpdateFlight extends Component {
    constructor(props){
        super(props);
        // this.historyRef = React.createRef();
        this.state = {
            // flightId: this.props.match.params.id,
            flightId:window.location.href.split('/')[3],
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
        FlightServices.updateFlight(parseInt(this.state.flightId),flight).then((res)=>{
            alert("Flight Details Updated!!");
            window.location.href = '/flights';
        });
        
    }

    componentDidMount(){
        // const { match } = this.props; // Access match from props
        // const { id } = match.params; // Get id from URL params
        // this.setState({ flightId: id }); // Update flightId in state
        // console.log(this.state.flightId);
        FlightServices.getFlightById(parseInt(this.state.flightId)).then((res)=>{
            let flight = res.data;
            console.table(flight);
            this.setState({flightName: flight.flightName,source: flight.source, destination: flight.destination, ticketPrice: flight.ticketPrice});
        });
    }

    cancel(){
        // this.props.history.push('/flights');
    }

    render() {
        return (
            <div className='container'>
                 
               <div className='card col-md-6 offset-md-3 offset-md-3 p-4 mt-5'>
                    <h1>Update Flight</h1>
                    <div className="card-body">
                        <form>
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
                                    <option value="">Select Source..</option>
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
                                    <option value="">Select Destination..</option>
                                    <option value="Chicago">Chicago</option>
                                    <option value="New-York">New-York</option>
                                    <option value="Seoul">Seoul</option>
                                    <option value="Vienna">Vienna</option>
                                    <option value="Dubai">Dubai</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="ticketPrice" className="form-label">Ticket Price</label><br />
                                <input type="number" className="form-control" id="ticketPrice" name='ticketPrice' value={this.state.ticketPrice} onChange={this.changeTicketPriceHandler} required/>
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

export default UpdateFlight;