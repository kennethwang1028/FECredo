/**
 * @jest-environment jsdom
 */
import React from 'react';
import {
  render,
  cleanup,
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
  it('should render only one topimage', () => {
    const { getAllByTestId } = render(
      <TopImageSelector testPosition={0} />,
    );
    const arr = getAllByTestId('topimage');
    expect(arr.length).toBe(1);
  });
  it('should render only one topimage', () => {
    const { getAllByTestId } = render(
      <TopImageSelector testPosition={1} />,
    );
    const arr = getAllByTestId('topimage');
    expect(arr.length).toBe(1);
  });
  it('should render only one topimage', () => {
    const { getAllByTestId } = render(
      <TopImageSelector testPosition={2} />,
    );
    const arr = getAllByTestId('topimage');
    expect(arr.length).toBe(1);
  });
});
