const fs = require('fs')
const path = require('path');

const stringData = fs.readFileSync(path.resolve(__dirname, '../input'), { encoding: 'utf-8' })

const diffScore = (str1, str2) => {
  let score = 0
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) score += 1
  }
  return score
}

const findCommon = (str1, str2) => {
  let res = ''
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] === str2[i]) {
      res = res + str1[i]
    }
  }
  return res
}

const strings = stringData.split('\n')
for (let i = 0; i < strings.length; i++) {
  for (let j = i + 1; j < strings.length; j++) {
    if (diffScore(strings[i], strings[j]) === 1) {
      console.log(findCommon(strings[i], strings[j]))
      return
    }
  }
}
