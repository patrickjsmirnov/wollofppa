import React from 'react';
import { render, screen } from '@testing-library/react';
import AuthorList from './index';

test('Renders author list', () => {
  render(<AuthorList authors={ ['Dima', 'Pavel', 'Nikolay'] } />);

  const title = screen.getByText(/authors/i);
  const author = screen.getByText(/dima/i);
  
  expect(author).toBeInTheDocument();
  expect(title).toBeInTheDocument();
});
