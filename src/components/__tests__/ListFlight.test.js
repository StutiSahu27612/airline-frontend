import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ListFlight from '../ListFlight';
import FlightServices from '../../services/FlightServices';

jest.mock('../../services/FlightServices');

describe('ListFlight Component', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        FlightServices.getAllFlights.mockResolvedValue({ data: [] });
    });

    test('renders flight list table', () => {
        render(
            <MemoryRouter>
                <ListFlight />
            </MemoryRouter>
        );
        expect(screen.getByText('Flight List')).toBeInTheDocument();
    });
}); 