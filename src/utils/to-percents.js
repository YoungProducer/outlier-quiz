module.exports = toPercents

function toPercents (currentValue, maxValue) {
  if (currentValue === 0) {
    return 0
  }
  return currentValue * 100 / maxValue
}
