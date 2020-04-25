const React = require('react')

const Quiz = require('./components/Quiz')
require('./App.css')

module.exports = App

function App () {
  return (
    <div>
      <Quiz />
    </div>
  )
}
