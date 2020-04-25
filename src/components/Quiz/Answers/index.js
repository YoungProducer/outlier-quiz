const React = require('react')

const styles = require('./styles.module.css')

module.exports = Answers

function Answers ({
  correct,
  incorrect
}) {
  const allAnswers = React.useMemo(() => {
    return [...incorrect, correct]
  }, [correct, incorrect])

  return (
    <div className={styles.wrapper}>
      {allAnswers.map(function (answer, index) {
        return (
          <div
            key={index}
            className={styles.buttonWrapper}
          >
            <button
              className={styles.button}
            >
              {answer}
            </button>
          </div>
        )
      })}
    </div>
  )
}
