import zipToDma, { InvalidZipError } from '../src/index.js'

describe('validations', () => {
  test('zipcodes must be 5 digits', () => {
    expect(() => zipToDma('abc')).toThrow(InvalidZipError)
    expect(() => zipToDma(123456)).toThrow(InvalidZipError)
    expect(() => zipToDma()).toThrow(InvalidZipError)
  })
})

test('maps zip codes to DMA codes', () => {
  expect(zipToDma('22206')).toBe(42)
})
