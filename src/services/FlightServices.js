import axios from "axios";

// const FLIGHT_BASE_API_URL =  "http://localhost:9000/flight";
const FLIGHT_BASE_API_URL =  "http://airline-app-container:9000/flight";

class FlightServices{

    getAllFlights(){
        return axios.get(FLIGHT_BASE_API_URL + "/");
    }

    createFlight(flight){
        return axios.post(FLIGHT_BASE_API_URL+ "/",flight);
    }

    getFlightById(flightId){
        return axios.get(FLIGHT_BASE_API_URL+"/"+flightId);
    }

    updateFlight(flightId, flight) {
        return axios.put(FLIGHT_BASE_API_URL + "/"+flightId, flight);
      }
      
      deleteFlight(flightId){
        return axios.delete (FLIGHT_BASE_API_URL+"/"+flightId);
    }
}

export default new FlightServices()