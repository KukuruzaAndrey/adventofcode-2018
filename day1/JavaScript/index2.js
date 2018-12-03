`const { parseData, operationMap } = require('./utils')

const frequencies = [operationMap[parseData[0].operation](0, parseData[0].number)]
let i = 1
while (true) {
  const index = i % parseData.length
  const frequency = operationMap[parseData[index].operation](frequencies[i - 1], parseData[index].number)
  if (frequencies.includes(frequency)) {
    console.log(frequency)
    return
  }
  frequencies[i] = frequency
  i += 1
}
