import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ListFlight from '../ListFlight';
import FlightServices from '../../services/FlightServices';

// Mock the FlightServices
jest.mock('../../services/FlightServices');

describe('ListFlight Component', () => {
    const mockFlights = [
        {
            flightId: 1,
            flightName: 'Vistara',
            source: 'Mumbai',
            destination: 'Dubai',
            ticketPrice: 45000
        },
        {
            flightId: 2,
            flightName: 'Air-India',
            source: 'Delhi',
            destination: 'Chicago',
            ticketPrice: 65000
        }
    ];

    beforeEach(() => {
        // Reset all mocks before each test
        jest.clearAllMocks();
        
        // Mock the getAllFlights method
        FlightServices.getAllFlights.mockResolvedValue({ data: mockFlights });
    });

    test('renders flight list table', async () => {
        render(<ListFlight />);
        
        // Check if the heading is present
        expect(screen.getByText('Flight List')).toBeInTheDocument();
        
        // Wait for the flights to be loaded
        await waitFor(() => {
            expect(screen.getByText('Vistara')).toBeInTheDocument();
            expect(screen.getByText('Air-India')).toBeInTheDocument();
        });
    });

    test('deletes flight when delete button is clicked', async () => {
        // Mock the window.confirm
        window.confirm = jest.fn(() => true);
        
        // Mock the deleteFlight method
        FlightServices.deleteFlight.mockResolvedValue({});

        render(<ListFlight />);

        // Wait for the flights to be loaded
        await waitFor(() => {
            const deleteButtons = screen.getAllByText('Delete');
            fireEvent.click(deleteButtons[0]);
        });

        // Verify that deleteFlight was called
        expect(FlightServices.deleteFlight).toHaveBeenCalledWith(1);
    });
}); 