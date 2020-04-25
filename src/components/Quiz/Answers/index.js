const React = require('react')
const classNames = require('classnames')

const styles = require('./styles.module.css')

module.exports = AnswersBlock

function Answers ({ answers, correct }) {
  const [selectedAnswer, setSelectedAnswer] = React.useState('')

  function handleButtonClick (answer, isUnselectable) {
    if (!isUnselectable) {
      setSelectedAnswer(answer)
    }
  }

  return answers.map(function (answer, index) {
    const isSelected = selectedAnswer === answer
    const isCorrect =
      answer === correct &&
      selectedAnswer !== '' &&
      !isSelected
    const isUnselectable =
      selectedAnswer !== '' &&
      !isSelected

    return (
      <div
        key={index}
        className={styles.buttonWrapper}
      >
        <button
          className={classNames(styles.button, {
            [styles.buttonCorrect]: isCorrect,
            [styles.buttonSelected]: isSelected,
            [styles.buttonUnselectable]: isUnselectable
          })}
          onClick={() => handleButtonClick(answer, isUnselectable)}
        >
          {answer}
        </button>
      </div>
    )
  })
}

function AnswersBlock ({
  correct,
  incorrect
}) {
  const allAnswers = React.useMemo(() => {
    return [...incorrect, correct]
  }, [correct, incorrect])

  return (
    <div className={styles.wrapper}>
      <Answers
        answers={allAnswers}
        correct={correct}
      />
    </div>
  )
}
