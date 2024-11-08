import axios from "axios";

// Update the base URL to your deployed backend service URL
const FLIGHT_BASE_API_URL = "https://airline-app-image-941806167555.us-central1.run.app/flight";

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