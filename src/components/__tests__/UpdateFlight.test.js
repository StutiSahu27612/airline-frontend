import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import UpdateFlight from '../UpdateFlight';
import FlightServices from '../../services/FlightServices';

jest.mock('../../services/FlightServices');

describe('UpdateFlight Component', () => {
    const mockFlight = {
        flightId: 1,
        flightName: 'Vistara',
        source: 'Mumbai',
        destination: 'Dubai',
        ticketPrice: '45000'
    };

    beforeEach(() => {
        jest.clearAllMocks();
        
        // Mock window.location
        delete window.location;
        window.location = { 
            href: 'http://localhost:3000/update-flight/1',
            split: () => ['http:', '', 'localhost:3000', '1']
        };

        // Mock the getFlightById method
        FlightServices.getFlightById.mockResolvedValue({ data: mockFlight });
    });

    test('loads and displays flight data', async () => {
        render(<UpdateFlight />);

        await waitFor(() => {
            expect(screen.getByText('Update Flight')).toBeInTheDocument();
            expect(FlightServices.getFlightById).toHaveBeenCalledWith(1);
        });
    });

    test('updates flight when form is submitted', async () => {
        const updatedFlight = {
            ...mockFlight,
            ticketPrice: '50000'
        };

        FlightServices.updateFlight.mockResolvedValue({});
        window.alert = jest.fn();

        render(<UpdateFlight />);

        await waitFor(() => {
            // Change ticket price
            fireEvent.change(screen.getByLabelText('Ticket Price'), {
                target: { value: updatedFlight.ticketPrice }
            });
        });

        // Submit form
        fireEvent.click(screen.getByText('Add'));

        await waitFor(() => {
            expect(FlightServices.updateFlight).toHaveBeenCalledWith(
                1,
                expect.objectContaining({ ticketPrice: updatedFlight.ticketPrice })
            );
            expect(window.location.href).toBe('/flights');
        });
    });
}); 