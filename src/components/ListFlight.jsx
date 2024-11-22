import React, { Component } from 'react'
import FlightServices from '../services/FlightServices'

export default class ListFlight extends Component {

    constructor(props){
      super(props);
      this.historyRef = React.createRef();
        this.state = {
          flights:[]
        }
        this.addFlight = this.addFlight.bind(this);
        this.editFlight = this.editFlight.bind(this);
        this.deleteFlight = this.deleteFlight.bind(this);
    }


  componentDidMount(){
    FlightServices.getAllFlights().then((res)=>{
      this.setState({flights : res.data});
    });
  }

  addFlight(){
    // this.props.history.push('/add-flight');
    // Redirect to another page within the same domain
    window.location.href = '/add-flight';
  }

  editFlight(flightId){
    window.location.href = '/update-flight/'+flightId;
  }

  deleteFlight(flightId){
    FlightServices.deleteFlight(flightId).then((res)=>{
      this.setState({flights: this.state.flights.filter(flight => flight.flightId !== flightId)});
      window.confirm(["Are you sure?"]);
    });
  }

  render() {
    return (
      
      <div>
        <h2 className='text-center mt-5'>Flight List</h2>
        <div className="row-3">
          <button type="submit" className='btn btn-primary' onClick={this.addFlight.bind(this)}>Add Flight</button>
        </div>
        <div className='row'>
          <table className='table table-dark table-striped table-bordered mt-3 text-center' >
            <thead className='text-center'>
              <tr>
                <th>Flight Id</th>
                <th>Flight Name</th>
                <th>Source</th>
                <th>Destination</th>
                <th>Ticket Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.flights.map(
                  flight => 
                  <tr key={flight.flightId}>
                    <td>{flight.flightId}</td>
                    <td>{flight.flightName}</td>
                    <td>{flight.source}</td>
                    <td>{flight.destination}</td>
                    <td>{flight.ticketPrice}</td>
                    <td>
                      <button className="btn btn-warning" onClick={(e)=> this.editFlight(flight.flightId)}>Update</button>
                      <button className="btn btn-danger ms-2" onClick={(e)=> this.deleteFlight(flight.flightId)}>Delete</button>
                    </td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
