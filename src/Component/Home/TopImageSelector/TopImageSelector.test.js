/**
 * @jest-environment jsdom
 */
import React from 'react';
import {
  render,
  cleanup,
  fireEvent,
  screen,
} from '@testing-library/react';
import '@testing-library/jest-dom';

import TopImageSelector from './TopImageSelector';

afterEach(cleanup);

describe('render correct', () => {
  it('render warning text correct', () => {
    const { getByTestId } = render(
      <TopImageSelector />,
    );
    expect(getByTestId('leftbutton')).toBeInTheDocument();
    expect(getByTestId('rightbutton')).toBeInTheDocument();
  });
});
