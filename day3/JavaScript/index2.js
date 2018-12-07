const { parsedData } = require('./utils')

const checkCross = (claim1, claim2) => {
  if (claim2.left < claim1.left) {
    [claim1, claim2] = [claim2, claim1]
  }
  if (claim1.left + claim1.wide <= claim2.left) {
    return false
  }

  if (claim2.top < claim1.top) {
    [claim1, claim2] = [claim2, claim1]
  }
  if (claim1.top + claim1.tall <= claim2.top) {
    return false
  }
  return true
}
module.exports = checkCross

const [nonCrossClaim] = parsedData.filter(
  claim => parsedData.every(
    testClaim => (testClaim === claim) ? true : !checkCross(testClaim, claim)
  )
)
console.log(nonCrossClaim.id)
