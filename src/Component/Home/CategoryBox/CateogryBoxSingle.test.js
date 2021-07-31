/**
 * @jest-environment jsdom
 */
import React from 'react';
import {
  render,
  cleanup,
  screen,
  fireEvent,
} from '@testing-library/react';
import '@testing-library/jest-dom';

import CategoryBoxSingle from './CategoryBoxSingle';

afterEach(cleanup);

describe('render correct', () => {
  it('render correct', () => {
    render(
      <CategoryBoxSingle
        name="hi"
        url="http"
        category="testing"
      />,
    );
    expect(screen.queryByText('hi')).toBeInTheDocument();
  });
});

it('should have defaultProps', () => {
  expect(CategoryBoxSingle.defaultProps.name).toBeDefined();
  expect(CategoryBoxSingle.defaultProps.url).toBeDefined();
  expect(CategoryBoxSingle.defaultProps.category).toBeDefined();
});
