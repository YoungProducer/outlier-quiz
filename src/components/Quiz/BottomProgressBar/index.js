const React = require('react')

const styles = require('./styles.module.css')

module.exports = BottomProgressBar

function BottomProgressBar ({
  currentScore,
  maxScore
}) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.labels}>
        <p>Score: {currentScore}%</p>
        <p>Max Score:{maxScore}%</p>
      </div>
    </div>
  )
}
