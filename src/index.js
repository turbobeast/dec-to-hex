'use strict'

const add_pows = (base, dec, num) =>
  Math.pow(base, num) <= dec
  ? add_pows(base, dec, num + 1)
  : num

const decToHex = (dec, prefix) => {
  if (dec === 0) {
    return `${dec}`
  }
  const hexes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f']
  let hexie = prefix || ''
  const pows = add_pows(16, dec, 0)
  for (let i = pows; i > 0; --i) {
    const hexie_chunk = Math.pow(16, i-1)
    const hex_loc = Math.floor(dec / hexie_chunk)
    const next_hexie = hexes[hex_loc % 16];

    if (!hexie_chunk > dec) {
      dec -= hexie_chunk
    }
    hexie += next_hexie
  }
  return hexie
};

module.exports = decToHex
