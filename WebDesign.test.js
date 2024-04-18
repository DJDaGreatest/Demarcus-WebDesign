import { render, screen } from '@testing-library/react';
import App from './App';

test('renders current data section', () => {
  render(<App />);
  const currentDataSection = screen.getByText(/Current Data/i);
  expect(currentDataSection).toBeInTheDocument();
});

test('renders sample data section', () => {
  render(<App />);
  const sampleDataSection = screen.getByText(/Sample Data/i);
  expect(sampleDataSection).toBeInTheDocument();
});