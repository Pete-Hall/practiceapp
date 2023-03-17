import { render, screen } from '@testing-library/react';
import App from './App';

test('renders "The start"', () => {
  render(<App />);
  const linkElement = screen.getByText("The start");
  expect(linkElement).toBeInTheDocument();
});
