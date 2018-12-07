const { array2D, parsedData} = require('./utils')
const fabric = new array2D(1000)

const markClaim = ({ left, top, wide, tall }) => {
  for (let i = left; i < left + wide; i++) {
    for (let j = top; j < top + tall; j++) {
      if (fabric.get(i, j) === undefined) {
        fabric.set(i, j, '#')
      } else if (fabric.get(i, j) === '#') {
        fabric.set(i, j, 'X')
      }
    }
  }
}

parsedData.forEach(claim => markClaim(claim))
console.log(fabric.count('X'))