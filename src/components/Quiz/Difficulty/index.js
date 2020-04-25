const React = require('react')

const blackStar = require('../../../black-star.svg')
const greyStar = require('../../../grey-star.svg')
const styles = require('./styles.module.css')

module.exports = Difficulty

const diffLevels = {
  easy: 0,
  medium: 1,
  hard: 2
}

function Difficulty ({ difficulty }) {
  const diffLevel = diffLevels[difficulty]

  return [...Array(3)].map(function (_, index) {
    return (
      <img
        key={index}
        className={styles.star}
        src={index <= diffLevel ? blackStar : greyStar}
      />
    )
  })
}
