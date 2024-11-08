// jest-dom adds custom jest matchers for asserting on DOM nodes.
import '@testing-library/jest-dom';

// Mock window.location
const mockLocation = {
  href: '',
  assign: jest.fn(),
  reload: jest.fn(),
  replace: jest.fn(),
  toString: jest.fn()
};

delete window.location;
window.location = mockLocation;

// Mock window.confirm
window.confirm = jest.fn(() => true);

// Mock window.alert
window.alert = jest.fn();
