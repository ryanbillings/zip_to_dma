import zipToDma, { InvalidZipError } from '../src/index.js'

describe('validations', () => {
  test('zipcodes must be 5 digits', () => {
    expect(() => zipToDma('abc')).toThrow(InvalidZipError)
    expect(() => zipToDma(123456)).toThrow(InvalidZipError)
    expect(() => zipToDma()).toThrow(InvalidZipError)
  })
})

test('maps zip codes to DMA codes', () => {
  expect(zipToDma('02717')).toBe(521)
  expect(zipToDma('15213')).toBe(508)
  expect(zipToDma('22206')).toBe(511)
  expect(zipToDma('01749')).toBe(543)
  expect(zipToDma('50210')).toBe(679)
})
