import React from 'react';
import { render, screen } from '@testing-library/react';

import { Text } from './text.component';

test('Text node rendered as a text', () => {
  render(<Text.$>text node</Text.$>);

  const text = screen.getByText('text node');
  expect(text).toBeInTheDocument();
});

test('Text node rendered as a heading', () => {
  render(<Text.$ heading={Text.Heading.H2}>heading text</Text.$>);

  const heading = screen.getByRole('heading', { level: 2 });
  expect(heading).toBeInTheDocument();
  expect(heading).toHaveTextContent('heading text');
});
