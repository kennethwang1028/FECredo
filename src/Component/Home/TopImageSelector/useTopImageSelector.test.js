/**
 * @jest-environment jsdom
 */
import { renderHook, act } from '@testing-library/react-hooks';

import useTopImageSelector from './useTopImageSelector';
import TopData from '../homeData';

describe('HandleClickedRight and Left working', () => {
  test('should change index Right', () => {
    const { result } = renderHook(() => useTopImageSelector(TopData));
    act(() => {
      result.current.HandleClickedRight();
    });
    expect(result.current.topIndex).toBe(1);
    act(() => {
      result.current.HandleClickedRight();
    });
    expect(result.current.topIndex).toBe(0);
  });
  test('should change index left', () => {
    const { result } = renderHook(() => useTopImageSelector(TopData));
    act(() => {
      result.current.HandleClickedLeft();
    });
    expect(result.current.topIndex).toBe(1);
    act(() => {
      result.current.HandleClickedLeft();
    });
    expect(result.current.topIndex).toBe(0);
  });
});

describe('settimeout work', () => {
  test('should change index every 4000ms', async () => {
    const { result, waitForValueToChange } = renderHook(() => useTopImageSelector(TopData));
    await waitForValueToChange(() => result.current.topIndex, { timeout: 10000 });
    expect(result.current.topIndex).toBe(1);
  });
});
