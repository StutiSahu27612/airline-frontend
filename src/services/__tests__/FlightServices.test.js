import axios from 'axios';
import FlightServices from '../FlightServices';

jest.mock('axios');

describe('FlightServices', () => {
  const mockFlights = [
    {
      flightId: 1,
      flightName: 'Vistara',
      source: 'Mumbai',
      destination: 'Dubai',
      ticketPrice: 45000
    }
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('getAllFlights returns flight data', async () => {
    axios.get.mockResolvedValue({ data: mockFlights });
    
    const result = await FlightServices.getAllFlights();
    
    expect(result.data).toEqual(mockFlights);
    expect(axios.get).toHaveBeenCalledTimes(1);
  });

  test('createFlight creates a new flight', async () => {
    const newFlight = {
      flightName: 'Test Flight',
      source: 'Test Source',
      destination: 'Test Destination',
      ticketPrice: 1000
    };

    axios.post.mockResolvedValue({ data: newFlight });
    
    const result = await FlightServices.createFlight(newFlight);
    
    expect(result.data).toEqual(newFlight);
    expect(axios.post).toHaveBeenCalledWith(expect.any(String), newFlight);
  });

  test('getFlightById returns specific flight', async () => {
    const flightId = 1;
    axios.get.mockResolvedValue({ data: mockFlights[0] });
    
    const result = await FlightServices.getFlightById(flightId);
    
    expect(result.data).toEqual(mockFlights[0]);
    expect(axios.get).toHaveBeenCalledWith(expect.stringContaining(`/${flightId}`));
  });

  test('updateFlight updates existing flight', async () => {
    const flightId = 1;
    const updatedFlight = { ...mockFlights[0], ticketPrice: 50000 };
    
    axios.put.mockResolvedValue({ data: updatedFlight });
    
    const result = await FlightServices.updateFlight(flightId, updatedFlight);
    
    expect(result.data).toEqual(updatedFlight);
    expect(axios.put).toHaveBeenCalledWith(expect.stringContaining(`/${flightId}`), updatedFlight);
  });

  test('deleteFlight deletes a flight', async () => {
    const flightId = 1;
    axios.delete.mockResolvedValue({ status: 200 });
    
    await FlightServices.deleteFlight(flightId);
    
    expect(axios.delete).toHaveBeenCalledWith(expect.stringContaining(`/${flightId}`));
  });
}); 