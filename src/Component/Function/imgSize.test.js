/**
 * @jest-environment jsdom
 */

import imgSize from './imgSize';

const testUrl = 'https://images.unsplash.com/&fit=crop&w=668&q=80';
const num = 250;

test('function imgSize return right', () => {
  const result = imgSize(testUrl, num);
  expect(result).toBe(`https://images.unsplash.com/&fit=crop&w=${num}&q=80`);
});
