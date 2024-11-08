import axios from 'axios';
import FlightServices from '../FlightServices';

jest.mock('axios');

describe('FlightServices', () => {
    const baseUrl = 'https://airline-app-image-941806167555.us-central1.run.app/flight';
    
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('getAllFlights makes GET request', async () => {
        const mockFlights = [{ id: 1, name: 'Test Flight' }];
        axios.get.mockResolvedValue({ data: mockFlights });

        const result = await FlightServices.getAllFlights();

        expect(axios.get).toHaveBeenCalledWith(`${baseUrl}/`);
        expect(result.data).toEqual(mockFlights);
    });

    test('createFlight makes POST request', async () => {
        const newFlight = { name: 'New Flight' };
        axios.post.mockResolvedValue({ data: newFlight });

        const result = await FlightServices.createFlight(newFlight);

        expect(axios.post).toHaveBeenCalledWith(`${baseUrl}/`, newFlight);
        expect(result.data).toEqual(newFlight);
    });

    test('updateFlight makes PUT request', async () => {
        const flightId = 1;
        const updatedFlight = { id: 1, name: 'Updated Flight' };
        axios.put.mockResolvedValue({ data: updatedFlight });

        const result = await FlightServices.updateFlight(flightId, updatedFlight);

        expect(axios.put).toHaveBeenCalledWith(`${baseUrl}/${flightId}`, updatedFlight);
        expect(result.data).toEqual(updatedFlight);
    });

    test('deleteFlight makes DELETE request', async () => {
        const flightId = 1;
        axios.delete.mockResolvedValue({ data: {} });

        await FlightServices.deleteFlight(flightId);

        expect(axios.delete).toHaveBeenCalledWith(`${baseUrl}/${flightId}`);
    });
}); 