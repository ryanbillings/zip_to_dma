import zipcodes from 'zipcodes'
import dmaCodes from './dmaCodes.js'

export class InvalidZipError extends Error {}

const validateZip = zipCode => /^\d{5}(-\d{4})?$/.test(zipCode)

//  Pythagorean theorem on an equi­rectangular projec­tion
function distance (loc1, loc2) {
  const x = (loc1.longitude - loc2.longitude) * Math.cos((loc1.latitude + loc2.latitude) / 2)
  const y = (loc1.latitude - loc2.latitude)
  return Math.sqrt(x * x + y * y)
}

function nearestLocation (loc) {
  return dmaCodes.reduce((smallestDistance, n) => {
    const dist = distance(loc, n)

    if (dist < smallestDistance.dist) {
      return {
        ...n,
        dist
      }
    }

    return smallestDistance
  }, { ...dmaCodes[0], dist: Number.MAX_VALUE })
}

export default function (zipCode) {
  if (!validateZip(zipCode)) {
    throw new InvalidZipError('Zipcode must be valid')
  }

  const { latitude, longitude } = zipcodes.lookup(zipCode)
  const nearest = nearestLocation({ latitude, longitude })

  return nearest.dma_code
}
