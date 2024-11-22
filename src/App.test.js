import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

// Mock BrowserRouter to avoid double Router issue
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    BrowserRouter: ({ children }) => <div data-testid="router-wrapper">{children}</div>
}));

test('renders without crashing', () => {
    render(
        <MemoryRouter>
            <App />
        </MemoryRouter>
    );
    expect(screen.getByTestId('router-wrapper')).toBeInTheDocument();
});
