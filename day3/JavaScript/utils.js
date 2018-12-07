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

  count (el) {
    let count = 0
    for (let i = 0; i < this.array.length; i++) {
      if (this.array[i] === el) count += 1
    }
    return count
  }
}

const parseClaim = claim => {//#1 @ 146,196: 19x14
  const [, id, left, top, wide, tall] = claim.match(/#(\d+)\s@\s(\d+),(\d+):\s(\d+)x(\d+)/)
  return {
    id: Number(id),
    left: Number(left),
    top: Number(top),
    wide: Number(wide),
    tall: Number(tall)
  }
}
const parsedData = splitData.map(claim => parseClaim(claim))
module.exports = { array2D, parseClaim, parsedData }