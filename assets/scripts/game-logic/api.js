const config = require('../config.js')
const store = require('../store.js')

const newGame = function () {
  store.cells = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
}

const box1 = function () {
  store.cells[0].push('x')
  console.log(store.cells)
}

module.exports = {
  newGame,
  box1
}
