const fs = require('fs')
const path = require('path');

const stringData = fs.readFileSync(path.resolve(__dirname, '../input'), { encoding: 'utf-8' })
const parseData = stringData
  .split('\n')
  .map(command => {
    return {
      operation: command.slice(0, 1),
      number: Number(command.slice(1))
    }
  })
const operationMap = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b
}
module.exports = { parseData, operationMap }