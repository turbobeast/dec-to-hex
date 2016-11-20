'use strict'
const test = require('tape')
const decToHex = require('../src/index')

test('dec-to-hex', t => {
  t.plan(20000)

  for (let i = 0; i < 20000; i += 1) {
    t.equal(decToHex(i), (i).toString(16))
  }
})
