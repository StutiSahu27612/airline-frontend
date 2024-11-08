import axios from "axios";

const FLIGHT_BASE_API_URL = "https://airline-app-image-941806167555.us-central1.run.app/flight";

// Create axios instance with default config
const axiosInstance = axios.create({
    baseURL: FLIGHT_BASE_API_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

// Add request interceptor for logging
axiosInstance.interceptors.request.use(request => {
    console.log('Starting Request:', {
        url: request.url,
        method: request.method,
        headers: request.headers
    });
    return request;
});

// Add response interceptor for logging
axiosInstance.interceptors.response.use(
    response => {
        console.log('Response:', {
            status: response.status,
            data: response.data,
            headers: response.headers
        });
        return response;
    },
    error => {
        console.error('Response Error:', {
            message: error.message,
            status: error.response?.status,
            data: error.response?.data
        });
        throw error;
    }
);

class FlightServices {
    getAllFlights() {
        console.log('Calling getAllFlights...');
        return axiosInstance.get("/")
            .catch(error => {
                console.error("Error fetching flights:", {
                    message: error.message,
                    status: error.response?.status,
                    data: error.response?.data
                });
                throw error;
            });
    }

    createFlight(flight) {
        return axiosInstance.post("/", flight)
            .catch(error => {
                console.error("Error creating flight:", error);
                throw error;
            });
    }

    getFlightById(flightId) {
        return axiosInstance.get(`/${flightId}`)
            .catch(error => {
                console.error(`Error fetching flight ${flightId}:`, error);
                throw error;
            });
    }

    updateFlight(flightId, flight) {
        return axiosInstance.put(`/${flightId}`, flight)
            .catch(error => {
                console.error(`Error updating flight ${flightId}:`, error);
                throw error;
            });
    }

    deleteFlight(flightId) {
        return axiosInstance.delete(`/${flightId}`)
            .catch(error => {
                console.error(`Error deleting flight ${flightId}:`, error);
                throw error;
            });
    }
}

export default new FlightServices();