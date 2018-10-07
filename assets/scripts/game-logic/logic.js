const store = require('../store.js')
const api = require('./api.js')
const ui = require('./ui.js')

// // const game = store.cells
// const cells = ['x', 'x', 'x', 'x', 'o', 'x', 'o', '', 'o']

const newGameCheck = function () {
  if (store.cells === undefined) {
    // alert('Please start new game.')
  } else {
    return true
  }
}
const emptyGame = ['', '', '', '', '', '', '', '', '']

let xCount
let oCount

const onResume = function () {
  if (store.cells.every(i => i !== null)) {
    $('#resume-game').removeClass('hidden')
  } else if (store.cells === undefined) {
    $('#resume-game').addClass('hidden')
  }
}

const resumeGame = function () {
  $('#get-stats').text('Get Game Stats')
  $('#hide-stats').addClass('hidden')
  $('#stats-display, .pic-container').addClass('hidden')
  $('.game-board').removeClass('hidden')
  $('#resume-game').addClass('hidden')
  $('#display-message').fadeIn()
}

const onNewGame = function () {
  $('.result').text('')
  for (let i = 0; i < 9; i++) {
    $(`#box${i}`).css('background-color', '#fff6e5')
  }
  $('#get-stats').text('Get Game Stats')
  $('#hide-stats').addClass('hidden')
  $('#display-message').text(`It is X's Turn. You're X.`).fadeIn()
  $('#stats-display').addClass('hidden')
  $('.top-row, .middle-row, .bottom-row').off()
  $('.result').removeClass('hidden')
  $('.result').css('color', 'black')
  $('.result').text('A new game has begun')
  $('.pic-container').addClass('hidden')
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
  for (let i = 0; i < 9; i++) {
    $(`#box${i}`).off()
  }
  $('#box0, #box1, #box2, #box3, #box4, #box5, #box6, #box7, #box8').html('')
  $('#box0').click(onBox0)
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
  $('#display-message').fadeOut()
  $('.result').css('visibility', 'visible')
  $('.result').text('VICTORY!')
  // $('#game-message').addClass('hidden')
  $('.result').css('color', 'green')
  // console.log(xCount, oCount)
  for (let i = 0; i < 9; i++) {
    $(`#box${i}`).off()
  }
  let clicks = 0
  $('.top-row, .middle-row, .bottom-row').on('click', function () {
    if (clicks > 0) {
      $('.result').css('color', 'black')
      $('.result').text('Please start a new game to continue')
    }
    ++clicks
  })
  api.gameOver()
    .then()
    .catch()
}

const defeat = function () {
  $('#display-message').fadeOut()
  $('.result').css('visibility', 'visible')
  $('.result').text('DEFEAT!')
  $('.result').css('color', 'red')
  for (let i = 0; i < 9; i++) {
    $(`#box${i}`).off()
  }
  let clicks = 0
  $('.top-row, .middle-row, .bottom-row').on('click', function () {
    if (clicks > 0) {
      $('.result').css('color', 'black')
      $('.result').text('Please start a new game to continue')
    }
    ++clicks
  })
  api.gameOver()
    .then()
    .catch()
}

const tie = function () {
  $('#display-message').fadeOut()
  $('.result').css('visibility', 'visible')
  $('.result').text('Its a TIE!')
  // $('.result').addClass('hidden')
  $('.result').css('color', 'blue')
  for (let i = 0; i < 9; i++) {
    $(`#box${i}`).off()
  }
  let clicks = 0
  $('.top-row, .middle-row, .bottom-row').on('click', function () {
    if (clicks > 0) {
      $('.result').css('color', 'black')
      $('.result').text('Please start a new game to continue')
    }
    ++clicks
  })
  api.gameOver()
    .then()
    .catch()
}

const onBoxClick = function (boxNum) {
  // console.log(store.cells)
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
    if (xCount === oCount && store.cells[boxNum] === '') {
      $('.result').css('visibility', 'hidden')
      $('#display-message').text(`It is O's turn. You're also O.`)
      if (oCount >= 1) {
        $('#display-message').text(`It is O's turn.`)
      }
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
      $('.result').css('visibility', 'hidden')
      $('#display-message').text(`It is X's turn. You're X`)
      $('#display-message').text(`It is O's turn. You're also O.`)
      if (xCount >= 1) {
        $('#display-message').text(`It is X's turn.`)
      }
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
    } else if (store.cells[boxNum] === 'x' || store.cells[boxNum] === 'o') {
      // console.log(store.cells)
      // console.log('cant click there!')
      $('.result').css('visibility', 'visible')
      $('.result').text(`You can't click there`)
    }
  }
  // console.log(store.cells)
  victoryCheck2()
}

const victoryCheck2 = function () {
  const cells = store.cells
  const xArr = []
  const oArr = []
  // push coordinate to its corresponding array
  for (let i = 0; i < cells.length; i++) {
    if (cells[i] === 'x') {
      xArr.push(i)
    } else if (store.cells[i] === 'o') {
      oArr.push(i)
    }
  }
  if (cells[0] === 'x' && cells[0] === cells[3] && cells[0] === cells[6]) {
    victory()
    $('#box0, #box3, #box6').css('background-color', '#77e25f')
  } else if (cells[1] === 'x' && cells[1] === cells[4] && cells[1] === cells[7]) {
    victory()
    $('#box1, #box4, #box7').css('background-color', '#77e25f')
  } else if (cells[2] === 'x' && cells[2] === cells[5] && cells[2] === cells[8]) {
    victory()
    $('#box2, #box5, #box8').css('background-color', '#77e25f')
  } else if (cells[0] === 'x' && cells[0] === cells[1] && cells[0] === cells[2]) {
    victory()
    $('#box0, #box1, #box2').css('background-color', '#77e25f')
  } else if (cells[3] === 'x' && cells[3] === cells[4] && cells[3] === cells[5]) {
    victory()
    $('#box3, #box4, #box5').css('background-color', '#77e25f')
  } else if (cells[6] === 'x' && cells[6] === cells[7] && cells[6] === cells[8]) {
    victory()
    $('#box6, #box7, #box8').css('background-color', '#77e25f')
  } else if (cells[0] === 'x' && cells[0] === cells[4] && cells[0] === cells[8]) {
    victory()
    $('#box0, #box4, #box8').css('background-color', '#77e25f')
  } else if (cells[2] === 'x' && cells[2] === cells[4] && cells[2] === cells[6]) {
    victory()
    $('#box2, #box4, #box6').css('background-color', '#77e25f')
  } else if (cells[0] === 'o' && cells[0] === cells[3] && cells[0] === cells[6]) {
    defeat()
    $('#box0, #box3, #box6').css('background-color', '#ea4646')
  } else if (cells[1] === 'o' && cells[1] === cells[4] && cells[1] === cells[7]) {
    defeat()
    $('#box1, #box4, #box7').css('background-color', '#ea4646')
  } else if (cells[2] === 'o' && cells[2] === cells[5] && cells[2] === cells[8]) {
    defeat()
    $('#box2, #box5, #box8').css('background-color', '#ea4646')
  } else if (cells[0] === 'o' && cells[0] === cells[1] && cells[0] === cells[2]) {
    defeat()
    $('#box0, #box1, #box1').css('background-color', '#ea4646')
  } else if (cells[3] === 'o' && cells[3] === cells[4] && cells[3] === cells[5]) {
    defeat()
    $('#box3, #box4, #box5').css('background-color', '#ea4646')
  } else if (cells[6] === 'o' && cells[6] === cells[7] && cells[6] === cells[8]) {
    defeat()
    $('#box6, #box7, #box8').css('background-color', '#ea4646')
  } else if (cells[0] === 'o' && cells[0] === cells[4] && cells[0] === cells[8]) {
    defeat()
    $('#box0, #box4, #box8').css('background-color', '#ea4646')
  } else if (cells[2] === 'o' && cells[2] === cells[4] && cells[2] === cells[6]) {
    defeat()
    $('#box2, #box4, #box6').css('background-color', '#ea4646')
  } else if (xArr.length === 5) {
    tie()
    for (let i = 0; i < 9; i++) {
      $(`#box${i}`).css('background-color', '#4677ea')
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
  onNewGame,
  onResume,
  resumeGame
}
