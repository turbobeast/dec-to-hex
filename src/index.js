const add_pows = (base, dec, num = 0) =>
  Math.pow(base, num) <= dec
  ? add_pows(base, dec, num + 1)
  : num;

const decToHex = dec => {
  const hexes = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
  let hexie = '0x';
  const pows = add_pows(16, dec);
  for(let i = pows; i > 0; --i) {
    const hexie_chunk = Math.pow(16, i-1);
    if(hexie_chunk > dec) {
      continue;
    }
    let hex_loc = Math.floor(dec / hexie_chunk);
    dec -= hexie_chunk;
    hexie += hexes[hex_loc % 16];
  }
  return hexie;
};

module.exports = decToHex;
