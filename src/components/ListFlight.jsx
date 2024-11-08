import React, { Component } from 'react'
import FlightServices from '../services/FlightServices'

export default class ListFlight extends Component {
    constructor(props){
      super(props);
      this.historyRef = React.createRef();
      this.state = {
        flights: [],
        loading: true,
        error: null
      }
      this.addFlight = this.addFlight.bind(this);
      this.editFlight = this.editFlight.bind(this);
      this.deleteFlight = this.deleteFlight.bind(this);
    }

    componentDidMount(){
      console.log("Component mounted, calling loadFlights...");
      this.loadFlights();
    }

    loadFlights() {
      this.setState({ loading: true, error: null });
      console.log("Making API call to fetch flights...");
      
      FlightServices.getAllFlights()
        .then((res) => {
          console.log("API Response received:", res);
          if (res && res.data) {
            console.log("Flights data:", res.data);
            this.setState({
              flights: res.data,
              loading: false
            });
          } else {
            console.error("Invalid response format:", res);
            this.setState({
              error: 'Invalid response format from server',
              loading: false
            });
          }
        })
        .catch((error) => {
          console.error('Detailed error:', {
            message: error.message,
            status: error.response?.status,
            statusText: error.response?.statusText,
            data: error.response?.data,
            config: error.config
          });
          
          this.setState({
            error: `Failed to load flights: ${error.message}`,
            loading: false
          });
        });
    }

    addFlight(){
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
      const { loading, error, flights } = this.state;

      if (loading) {
        return (
          <div className="text-center mt-5">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        );
      }

      if (error) {
        return (
          <div className="alert alert-danger mt-5" role="alert">
            {error}
          </div>
        );
      }

      return (
        <div>
          <h2 className='text-center mt-5'>Flight List</h2>
          <div className="row-3">
            <button type="submit" className='btn btn-primary' onClick={this.addFlight}>
              Add Flight
            </button>
          </div>
          {flights.length === 0 ? (
            <div className="alert alert-info mt-3">
              No flights available.
            </div>
          ) : (
            <div className='row'>
              <table className='table table-dark table-striped table-bordered mt-3 text-center'>
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
                  {flights.map(flight => (
                    <tr key={flight.flightId}>
                      <td>{flight.flightId}</td>
                      <td>{flight.flightName}</td>
                      <td>{flight.source}</td>
                      <td>{flight.destination}</td>
                      <td>{flight.ticketPrice}</td>
                      <td>
                        <button 
                          className="btn btn-warning" 
                          onClick={() => this.editFlight(flight.flightId)}
                        >
                          Update
                        </button>
                        <button 
                          className="btn btn-danger ms-2" 
                          onClick={() => this.deleteFlight(flight.flightId)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      );
    }
}
