import React from 'react';
import { render, screen } from '@testing-library/react';
import Welcome from '../Welcome';

describe('Welcome Component', () => {
    test('renders welcome message', () => {
        render(<Welcome />);
        expect(screen.getByText('Welcome')).toBeInTheDocument();
    });
}); 