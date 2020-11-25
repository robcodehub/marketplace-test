import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders new listings link', () => {
  render(<App />);
  const linkElement = screen.getByText(/new listings/i);
  expect(linkElement).toBeInTheDocument();
});
