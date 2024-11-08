import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import AddFlight from '../AddFlight';
import FlightServices from '../../services/FlightServices';

jest.mock('../../services/FlightServices');

describe('AddFlight Component', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        // Mock window.location.href
        delete window.location;
        window.location = { href: '' };
    });

    test('renders add flight form', () => {
        render(<AddFlight />);
        
        expect(screen.getByText('Add Flight')).toBeInTheDocument();
        expect(screen.getByLabelText('Flight Name')).toBeInTheDocument();
        expect(screen.getByLabelText('Source')).toBeInTheDocument();
        expect(screen.getByLabelText('Destination')).toBeInTheDocument();
        expect(screen.getByLabelText('Ticket Price')).toBeInTheDocument();
    });

    test('submits form with flight data', async () => {
        const mockFlight = {
            flightName: 'Vistara',
            source: 'Mumbai',
            destination: 'Dubai',
            ticketPrice: '45000'
        };

        FlightServices.createFlight.mockResolvedValue({});
        window.alert = jest.fn();

        render(<AddFlight />);

        // Fill in the form
        fireEvent.change(screen.getByLabelText('Flight Name'), { 
            target: { value: mockFlight.flightName } 
        });
        fireEvent.change(screen.getByLabelText('Source'), { 
            target: { value: mockFlight.source } 
        });
        fireEvent.change(screen.getByLabelText('Destination'), { 
            target: { value: mockFlight.destination } 
        });
        fireEvent.change(screen.getByLabelText('Ticket Price'), { 
            target: { value: mockFlight.ticketPrice } 
        });

        // Submit the form
        fireEvent.click(screen.getByText('Add'));

        await waitFor(() => {
            expect(FlightServices.createFlight).toHaveBeenCalledWith(mockFlight);
            expect(window.location.href).toBe('/flights');
        });
    });
}); 