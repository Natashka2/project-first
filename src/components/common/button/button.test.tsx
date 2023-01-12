import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { Button } from './button.component';

test('Button rendered and clickable', () => {
  const handleClick = jest.fn();
  render(
    <Button.$ onClick={handleClick} dataTestId="button">
      button text
    </Button.$>,
  );

  const button = screen.getByText('button text');
  expect(button).toBeInTheDocument();

  fireEvent.click(button);
  expect(handleClick).toHaveBeenCalledTimes(1);
});
