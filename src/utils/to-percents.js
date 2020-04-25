module.exports = toPercents

function toPercents (currentValue, maxValue) {
  if (currentValue === 0) {
    return 0
  }
  return Math.round(currentValue * 100 / maxValue)
}
