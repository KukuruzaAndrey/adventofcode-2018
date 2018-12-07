const checkCross = require('../index2')
const { parseClaim } = require('../utils')

test('1', () => {
  expect(checkCross(parseClaim('#1 @ 1,3: 4x4'), parseClaim('#2 @ 3,1: 4x4'))).toBeTruthy()
})
test('2', () => {
  expect(checkCross(parseClaim('#1 @ 1,3: 4x4'), parseClaim('#3 @ 5,5: 2x2'))).toBeFalsy()
})
test('3', () => {
  expect(checkCross(parseClaim('#3 @ 5,5: 2x2'), parseClaim('#2 @ 3,1: 4x4'))).toBeFalsy()
})