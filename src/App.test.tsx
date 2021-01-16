import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Tetris title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Tetris!/i);
  expect(linkElement).toBeInTheDocument();
});
