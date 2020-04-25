const React = require('react')

const styles = require('./styles.module.css')

module.exports = BottomProgressBar

function ProgressBar ({
  className,
  value
}) {
  return (
    <div
      className={className}
      style={{
        width: `${value}%`
      }}
    />
  )
}

function BottomProgressBar ({
  currentScore,
  maxScore,
  rightScore
}) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.labels}>
        <p>Score: {currentScore}%</p>
        <p>Max Score:{maxScore}%</p>
      </div>
      <div className={styles.progressBarWrapper}>
        <ProgressBar className={styles.maxScoreBar} value={maxScore} />
        <ProgressBar className={styles.currentScoreBar} value={currentScore} />
        <ProgressBar className={styles.rightScoreBar} value={rightScore} />
      </div>
    </div>
  )
}
