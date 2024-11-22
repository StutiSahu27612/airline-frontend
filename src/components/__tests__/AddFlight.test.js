import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AddFlight from '../AddFlight';
import FlightServices from '../../services/FlightServices';

jest.mock('../../services/FlightServices');

describe('AddFlight Component', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('renders add flight form', () => {
        render(
            <MemoryRouter>
                <AddFlight />
            </MemoryRouter>
        );
        expect(screen.getByText('Add Flight')).toBeInTheDocument();
    });
}); 