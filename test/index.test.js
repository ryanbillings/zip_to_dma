import zipToDma from '../src/index.js';

test('maps zip codes to DMA codes', () => {
  expect(zipToDma('22206')).toBe(42);
});
