import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import Star from './index';

test('renders a star', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Star />, div);
  expect(div.querySelector('svg')).toHaveAttribute('id', 'star');
  expect(div.querySelector('svg')).toHaveClass('help');
});

test('renders an h1', () => {
  const { getByText } = render(<Star />);
  const h1 = getByText(/Great Star/);
  expect(h1).toHaveTextContent('Great Star');
});
