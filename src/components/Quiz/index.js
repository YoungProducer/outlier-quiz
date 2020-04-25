const React = require('react')

const parseQuestions = require('../../utils/parse-questions')
const questions = parseQuestions(require('../../questions.json'))
const styles = require('./styles.module.css')
const greyStar = require('../../grey-star.svg')
const blackStar = require('../../black-star.svg')

module.exports = Quiz

const diffLevels = {
  easy: 0,
  medium: 1,
  hard: 2
}

function Quiz () {
  const [currentAnswerIndex, setCurrentAnswerIndex] = React.useState(0)
  const currentAnswer = React.useMemo(() => {
    return questions[currentAnswerIndex]
  }, [currentAnswerIndex])

  const difficulty = React.useMemo(() => {
    const diffLevel = diffLevels[currentAnswer.difficulty]

    return [...Array(3)].map(function (_, index) {
      return (
        <img
          className={styles.star}
          src={index <= diffLevel ? blackStar : greyStar}
        />
      )
    })
  }, [currentAnswer])

  return (
    <div className={styles.root}>
      <div className={styles.innerContainer}>
        <h1 className={styles.questionIndex}>Question {currentAnswerIndex + 1} of {questions.length}</h1>
        <p className={styles.category}>{currentAnswer.category}</p>
        <div className={styles.difficultyBlock}>
          {difficulty}
        </div>
        <p className={styles.question}>{currentAnswer.question}</p>
      </div>
    </div>
  )
}
