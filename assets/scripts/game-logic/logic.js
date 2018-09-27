const store = require('../store.js')
const api = require('./api.js')
const ui = require('./ui.js')

// // const game = store.cells
// const cells = ['x', 'x', 'x', 'x', 'o', 'x', 'o', '', 'o']

const newGameCheck = function () {
  if (store.cells === undefined) {
    alert('Please start new game.')
  } else {
    return true
  }
}
const emptyGame = ['', '', '', '', '', '', '', '', '']

let xCount
let oCount

const onNewGame = function () {
  $('#game-message').removeClass('hidden')
  $('#result, .pic-container').addClass('hidden')
  store.cells = emptyGame
  for (let i = 0; i < store.cells.length; i++) {
    store.cells[i] = ''
  }
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
  xCount = 0
  oCount = 0
  $('.game-board').removeClass('hidden')
  $('#box0, #box1, #box2, #box3, #box4, #box5, #box6, #box7, #box8').html('')
  $('#box0').on('click', onBox0)
  $('#box1').on('click', onBox1)
  $('#box2').on('click', onBox2)
  $('#box3').on('click', onBox3)
  $('#box4').on('click', onBox4)
  $('#box5').on('click', onBox5)
  $('#box6').on('click', onBox6)
  $('#box7').on('click', onBox7)
  $('#box8').on('click', onBox8)
}

const victory = function () {
  $('#result').removeClass('hidden')
  $('.result').text('VICTORY!')
  $('#game-message').addClass('hidden')
  $('.result').css('color', 'green')
  // console.log(xCount, oCount)
  for (let i = 0; i < 9; i++) {
    $(`#box${i}`).off()
  }
}

const defeat = function () {
  $('#result').removeClass('hidden')
  $('.result').text('DEFEAT!')
  $('#game-message').addClass('hidden')
  $('.result').css('color', 'red')
  for (let i = 0; i < 9; i++) {
    $(`#box${i}`).off()
  }
}

const tie = function () {
  $('#result').removeClass('hidden')
  $('.result').text('Its a TIE!')
  $('#game-message').addClass('hidden')
  $('.result').css('color', 'blue')
}

const onBoxClick = function (boxNum) {
  if (newGameCheck()) {
    xCount = 0
    oCount = 0
    // look for all moves and count the number of each
    for (let i = 0; i < store.cells.length; i++) {
      if (store.cells[i] === 'x') {
        xCount++
      } else if (store.cells[i] === 'o') {
        oCount++
      }
    }
    // console.log(xCount, oCount)
    if (xCount === oCount && store.cells[boxNum] === '') {
      store.cells[boxNum] = 'x'
      const data = {
        'cell': {
          'index': boxNum,
          'value': 'x'
        },
        'over': false
      }
      api.updateGame(data)
        .then()
        .catch()
      $(`#box${boxNum}`).text('x')
    } else if (xCount > oCount && store.cells[boxNum] === '') {
      store.cells[boxNum] = 'o'
      $(`#box${boxNum}`).text('o')
      const data = {
        'cell': {
          'index': boxNum,
          'value': 'o'
        },
        'over': false
      }
      api.updateGame(data)
        .then()
        .catch()
    }
    // console.log(xCount, oCount)
  }
  victoryCheck()
}

const tieCheck = function (xArr) {
  console.log('tie is working')
  console.log(xArr)
  if (xArr.length === 5) {
    console.log('this should be a tie')
    tie()
    api.gameOver()
      .then()
      .catch()
  }
}

const victoryCheck = function () {
  // victory contains all victory cases
  const victoryCases = [[0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [2, 4, 6]]
  const xArr = []
  const oArr = []
  // push coordinate to its corresponding array
  for (let i = 0; i < store.cells.length; i++) {
    if (store.cells[i] === 'x') {
      xArr.push(i)
    } else if (store.cells[i] === 'o') {
      oArr.push(i)
    }
  }
  for (let i = 0; i < victoryCases.length; i++) {
    if (victoryCases[i].every(function (num) {
      return (xArr.indexOf(num) >= 0)
    })) {
      victory()
      api.gameOver()
        .then(console.log)
        .catch(console.log)
    } else if (victoryCases[i].every(function (num) {
      return (oArr.indexOf(num) >= 0)
    })) {
      defeat()
      api.gameOver()
        .then()
        .catch()
    } else if (xArr.length === 5 && !(victoryCases[i].every(function (num) {
      return (xArr.indexOf(num) >= 0)
    }))
    ) {
      tieCheck(xArr)
    }
  }
}

const onBox0 = function () {
  onBoxClick(0)
}
const onBox1 = function () {
  onBoxClick(1)
}
const onBox2 = function () {
  onBoxClick(2)
}
const onBox3 = function () {
  onBoxClick(3)
}
const onBox4 = function () {
  onBoxClick(4)
}
const onBox5 = function () {
  onBoxClick(5)
}
const onBox6 = function () {
  onBoxClick(6)
}
const onBox7 = function () {
  onBoxClick(7)
}
const onBox8 = function () {
  onBoxClick(8)
}

// console.log(takeTurn(game))

module.exports = {
  onBoxClick,
  onNewGame
}
