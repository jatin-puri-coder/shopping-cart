import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

//simple tests to see if webpage renders without crashing
test('renders heading', () => {
  render( <App />);
  const headingElement = screen.getByText('Dangerous Goods');
  expect(headingElement).toBeInTheDocument();
});

test('renders cart component without crashing', () => {
  render( <App />);
  expect((screen.getByText('Cart'))).toBeInTheDocument()
})
