const fs = require('fs')
const path = require('path');

const stringData = fs.readFileSync(path.resolve(__dirname, '../input'), { encoding: 'utf-8' })

const letterCountContains = str => {
  const letters = [...str]
  const uniqLetters = Array.from(new Set(letters))
  const countContains = {}
  for (let i = 0; i < uniqLetters.length; i++) {
    countContains[uniqLetters[i]] = 0
  }
  for (let i = 0; i < uniqLetters.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (uniqLetters[i] === str[j]) {
        countContains[uniqLetters[i]] += 1
      }
    }
  }
  return countContains
}

const totalCount = stringData.split('\n')
  .map(str => letterCountContains(str))
  .map(count => {
    const values = Object.values(count)
    return {
      2: values.includes(2) ? 1 : 0,
      3: values.includes(3) ? 1 : 0
    }
  })
  .reduce((prev, curr) => {
    return {
      2: prev['2'] + curr['2'],
      3: prev['3'] + curr['3'],
    }
  })

console.log(totalCount['2']*totalCount['3'])