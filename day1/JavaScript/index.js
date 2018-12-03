const { parseData, operationMap } = require('./utils')

const result = parseData.reduce((sum, curr) => operationMap[curr.operation](sum, curr.number), 0)
console.log(result)