/**
 * @jest-environment jsdom
 */
import React from 'react';
import {
  render,
  cleanup,
  fireEvent,
} from '@testing-library/react';
import '@testing-library/jest-dom';

import InputText from './InputText';

afterEach(cleanup);

const test1 = 'hi';
const test2 = true;
const test3 = false;
const test4 = jest.fn();
const test5 = 'hello world';

describe('render text correct', () => {
  it('render warning text correct', () => {
    const { queryByTestId } = render(
      <InputText
        text={test1}
        isWarning={test2}
        handleChange={test4}
        warningText={test5}
      />,
    );
    expect(queryByTestId('warning').textContent).toBe(`!! ${test5} !!`);
  });
  it('not render warning text correct', () => {
    const { queryByTestId } = render(
      <InputText
        text={test1}
        isWarning={test3}
        handleChange={test4}
        warningText={test5}
      />,
    );
    expect(queryByTestId('warning')).toBeNull();
  });
});

describe('function works correct', () => {
  it('input change invoke test4', () => {
    const { queryByTestId } = render(
      <InputText
        text={test1}
        isWarning={test2}
        handleChange={test4}
        warningText={test5}
      />,
    );
    fireEvent.change(queryByTestId('input'), { target: { value: 'ab' } });
    expect(test4).toHaveBeenCalledTimes(1);
    fireEvent.change(queryByTestId('input'), { target: { value: 'abc' } });
    expect(test4).toHaveBeenCalledTimes(2);
  });
});

it('should have defaultProps', () => {
  expect(InputText.defaultProps.text).toBeDefined();
  expect(InputText.defaultProps.isWarning).toBeDefined();
  expect(InputText.defaultProps.handleChange()).toBeDefined();
  expect(InputText.defaultProps.warningText).toBeDefined();
});
