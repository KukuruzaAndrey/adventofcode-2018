const fs = require('fs')
const path = require('path')

const stringData = fs.readFileSync(path.resolve(__dirname, '../input'), { encoding: 'utf-8' })
const splitData = stringData.split('\n')

class array2D {
  constructor (size) {
    this.size = size
    this.array = []
  }

  get (x, y) {
    return this.array[this.size * x + y]
  }

  set (x, y, value) {
    this.array[this.size * x + y] = value
  }
}

const parseClaim = claim => {

  //#1 @ 146,196: 19x14
  const [, left, top, wide, tall] = claim.match(/@\s(\d+),(\d+):\s(\d+)x(\d+)/)
  return { left, top, wide, tall }
}

const fabric = new array2D(1000)

const countInches = data => {
  data.map()
}


module.exports = { countInches }