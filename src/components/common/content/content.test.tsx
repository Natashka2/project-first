import React from 'react';
import { render, screen } from '@testing-library/react';

import { Content } from './content.component';

test('Content children rendered', () => {
  render(
    <Content.$>
      <div>item 1</div>
      <div>item 2</div>
    </Content.$>,
  );

  expect(screen.getByText('item 1')).toBeInTheDocument();
  expect(screen.getByText('item 2')).toBeInTheDocument();
});
