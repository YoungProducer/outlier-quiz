module.exports = parseQuestions

/**
 * Function which accept array of questiong
 * and then replace all spec characters to string
 * via 'decodeURIComponent';
 */
function parseQuestions (questions) {
  return questions.map(function (question) {
    return Object
      .entries(question)
      .reduce(function (acc, [key, value]) {
        return {
          ...acc,
          [key]: decodeURIComponent(value)
        }
      }, {})
  })
}
