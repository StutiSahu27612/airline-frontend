import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
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
        render(
            <MemoryRouter>
                <ListFlight />
            </MemoryRouter>
        );
        
        // Check if the heading is present
        expect(screen.getByText('Flight List')).toBeInTheDocument();
        
        // Wait for the flights to be loaded
        await waitFor(() => {
            expect(screen.getByText('Vistara')).toBeInTheDocument();
            expect(screen.getByText('Air-India')).toBeInTheDocument();
            expect(FlightServices.getAllFlights).toHaveBeenCalled();
        });
    });

    test('navigates to add flight page', async () => {
        render(
            <MemoryRouter>
                <ListFlight />
            </MemoryRouter>
        );

        const addButton = screen.getByText('Add Flight');
        fireEvent.click(addButton);
        
        expect(window.location.href).toBe('/add-flight');
    });

    test('deletes flight when delete button is clicked', async () => {
        // Mock the window.confirm
        window.confirm = jest.fn(() => true);
        
        // Mock the deleteFlight method
        FlightServices.deleteFlight.mockResolvedValue({});

        render(
            <MemoryRouter>
                <ListFlight />
            </MemoryRouter>
        );

        // Wait for the flights to be loaded
        await waitFor(() => {
            const deleteButtons = screen.getAllByText('Delete');
            fireEvent.click(deleteButtons[0]);
        });

        // Verify that deleteFlight was called
        expect(FlightServices.deleteFlight).toHaveBeenCalledWith(1);
        expect(window.confirm).toHaveBeenCalled();
    });

    test('navigates to update page when update button is clicked', async () => {
        render(
            <MemoryRouter>
                <ListFlight />
            </MemoryRouter>
        );

        await waitFor(() => {
            const updateButtons = screen.getAllByText('Update');
            fireEvent.click(updateButtons[0]);
        });

        expect(window.location.href).toBe('/update-flight/1');
    });
}); 