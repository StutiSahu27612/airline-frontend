// jest-dom adds custom jest matchers for asserting on DOM nodes.
import '@testing-library/jest-dom';

// Mock window.location
const mockLocation = {
  href: '',
  pathname: '',
  search: '',
  hash: '',
  origin: 'http://localhost',
  assign: jest.fn(),
  replace: jest.fn(),
  reload: jest.fn(),
  split: jest.fn(() => ['http:', '', 'localhost:3000', '1'])
};

delete window.location;
window.location = mockLocation;

// Mock window.alert
window.alert = jest.fn();

// Mock window.confirm
window.confirm = jest.fn(() => true);

// Mock matchMedia
Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
    })),
});
