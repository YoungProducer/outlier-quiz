const React = require('react')

const styles = require('./styles.module.css')

module.exports = TopProgressBar

function TopProgressBar ({ progress }) {
  return (
    <div className={styles.progressBarWrapper}>
      <div
        className={styles.progressBar}
        style={{
          width: `${progress}%`
        }}
      />
    </div>
  )
}
