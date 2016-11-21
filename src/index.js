'use strict'

const addPows = (base, dec, num) =>
  Math.pow(base, num) > dec
  ? num
  : addPows(base, dec, num + 1)

const decToHex = (dec, prefix) => {
  if (dec === 0) {
    return `${dec}`
  }
  const hexes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f']
  const pows = addPows(16, dec, 0)
  let hexie = prefix || ''

  for (let i = pows; i > 0; --i) {
    let hexieChunk = Math.pow(16, i - 1)
    let hexLoc = Math.floor(dec / hexieChunk)
    let nextHexie = hexes[hexLoc % 16]

    hexie += nextHexie
    if (dec > hexieChunk) {
      dec -= hexieChunk
    }
  }

  return hexie
}

module.exports = decToHex
