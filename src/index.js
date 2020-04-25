const React = require('react')
const ReactDOM = require('react-dom')

const App = require('./App')
const serviceWorker = require('./serviceWorker')
require('./index.css')

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
