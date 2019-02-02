import zipcodes from 'zipcodes'

export class InvalidZipError extends Error {}

const validateZip = zipCode => /^\d{5}(-\d{4})?$/.test(zipCode)

export default function (zipCode) {
  if (!validateZip(zipCode)) {
    throw new InvalidZipError('Zipcode must be valid')
  }

  return zipcodes.random().zip
}
