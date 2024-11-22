import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import UpdateFlight from '../UpdateFlight';
import FlightServices from '../../services/FlightServices';

jest.mock('../../services/FlightServices');

describe('UpdateFlight Component', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        FlightServices.getFlightById.mockResolvedValue({ data: {} });
    });

    test('renders update flight form', () => {
        render(
            <MemoryRouter>
                <UpdateFlight />
            </MemoryRouter>
        );
        expect(screen.getByText('Update Flight')).toBeInTheDocument();
    });
}); 