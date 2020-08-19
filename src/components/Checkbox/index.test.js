import React from 'react';

import { render, fireEvent } from '@testing-library/react';
import { Checkbox } from './index';
test('Selecting the checkbox should change the value of checked to true', () => {
  const { getLabelByText, getByTestId } = render(<Checkbox />);
  const checkbox = getLabelByText(/not checked/);
  // const checkbox = getByTestid('checkbox')
  fireEvent.click(checkbox);
  expect(checkbox.checked).toEqual(true);
  fireEvent.click(checkbox);
  expect(checkbox.checked).toEqual(false);
});
