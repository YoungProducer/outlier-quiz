const React = require('react')
const classNames = require('classnames')

const styles = require('./styles.module.css')

module.exports = AnswersBlock

function Answers ({
  isFinished,
  answers,
  correct,
  selectedAnswer,
  setSelectedAnswer
}) {
  function handleButtonClick (answer, isUnselectable) {
    if (!isUnselectable && !isFinished) {
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
      (selectedAnswer !== '' &&
      !isSelected) ||
      isFinished

    return (
      <div
        key={index}
        className={classNames(styles.buttonWrapper, {
          [styles.buttonWrapperRight]: index % 2 !== 0,
          [styles.buttonWrapperLeft]: index % 2 === 0
        })}
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
  isFinished,
  correct,
  incorrect,
  nextQuestion,
  increaseAmountOfRightAnswers
}) {
  const [selectedAnswer, setSelectedAnswer] = React.useState('')

  const allAnswers = React.useMemo(() => {
    return [...incorrect, correct]
  }, [correct, incorrect])

  function handleButtonClick () {
    if (correct === selectedAnswer && !isFinished) {
      increaseAmountOfRightAnswers()
    }

    if (!isFinished) {
      setSelectedAnswer('')
      nextQuestion()
    }
  }

  return (
    <div>
      <div className={styles.wrapper}>
        <Answers
          isFinished={isFinished}
          answers={allAnswers}
          correct={correct}
          selectedAnswer={selectedAnswer}
          setSelectedAnswer={setSelectedAnswer}
          increaseAmountOfRightAnswers={increaseAmountOfRightAnswers}
        />
      </div>
      { (selectedAnswer !== '' || isFinished) && (
        <div className={styles.questionStatusWrapper}>
          {!isFinished && (
            <>
              <h1 className={styles.correctLabel}>
                {selectedAnswer === correct ? 'Correct!' : 'Sorry!'}
              </h1>
              <button
                onClick={handleButtonClick}
                className={styles.nextQuestionButton}
              >
                Next Question
              </button>
            </>
          )}
        </div>
      )}
    </div>
  )
}
