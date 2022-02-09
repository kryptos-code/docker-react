import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders instagram link', () => {
  render(<App />);
  const linkElement = screen.getByText(/instagram/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders basement', () => {
  render(<App />);
  const expElement = screen.getByText(/Basement/);
  expect(expElement).toBeInTheDocument();
});