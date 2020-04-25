const React = require('react')

const Difficulty = require('./Difficulty')
const AnswersBlock = require('./Answers')
const TopProgressBar = require('./TopProgressBar')
const BottomProgressBar = require('./BottomProgressBar')
const parseQuestions = require('../../utils/parse-questions')
const percentsRatio = require('../../utils/percents-ratio')
const questions = parseQuestions(require('../../questions.json'))
const styles = require('./styles.module.css')

module.exports = Quiz

function Quiz () {
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(1)
  const [amountOfRightAnswers, setAmountOfRightAnswers] = React.useState(0)
  const [isFinished, setIsFinished] = React.useState(false)

  function increaseAmountOfRightAnswers () {
    setAmountOfRightAnswers(amountOfRightAnswers => amountOfRightAnswers + 1)
  }

  const currentAnswer = React.useMemo(function () {
    return questions[currentQuestionIndex - 1]
  }, [currentQuestionIndex])

  function nextQuestion () {
    setIsFinished(currentQuestionIndex === questions.length)
    setCurrentQuestionIndex(currentQuestionIndex === questions.length
      ? currentQuestionIndex
      : currentQuestionIndex + 1)
  }

  const currentScore = React.useMemo(function () {
    percentsRatio(
      amountOfRightAnswers,
      (isFinished
        ? currentQuestionIndex
        : currentQuestionIndex - 1)
    )
  }, [amountOfRightAnswers, isFinished, currentQuestionIndex])

  const maxScore = React.useMemo(function () {
    return percentsRatio(
      amountOfRightAnswers +
      questions.length -
      (isFinished
        ? currentQuestionIndex
        : currentQuestionIndex - 1),
      questions.length
    )
  }, [])

  const rightScore = React.useMemo(function () {
    return percentsRatio(amountOfRightAnswers, questions.length)
  }, [amountOfRightAnswers])

  return (
    <div className={styles.root}>
      <TopProgressBar
        progress={percentsRatio(
          currentQuestionIndex,
          questions.length
        )}
      />
      <div className={styles.innerContainer}>
        <h1 className={styles.questionIndex}>Question {currentQuestionIndex} of {questions.length}</h1>
        <p className={styles.category}>{currentAnswer.category}</p>
        <Difficulty difficulty={currentAnswer.difficulty}/>
        <p className={styles.question}>{currentAnswer.question}</p>
        <AnswersBlock
          correct={currentAnswer.correct_answer}
          incorrect={currentAnswer.incorrect_answers}
          nextQuestion={nextQuestion}
          increaseAmountOfRightAnswers={increaseAmountOfRightAnswers}
          isFinished={isFinished}
        />
        <BottomProgressBar
          currentScore={currentScore}
          maxScore={maxScore}
          rightScore={rightScore}
        />
      </div>
    </div>
  )
}
