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
  $('#result').addClass('hidden')
  store.cells = emptyGame
  for (let i = 0; i < store.cells.length; i++) {
    store.cells[i] = ''
  }
  api.newGame()
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
  console.log(store.cells)
  xCount = 0
  oCount = 0
  console.log('xCount is ' + xCount, 'oCount is ' + oCount)
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

// const noPlay = function () {
//   $('#box0').off('click', onBox0)
//   $('#box1').off('click', onBox1)
//   $('#box2').off('click', onBox2)
//   $('#box3').off('click', onBox3)
//   $('#box4').off('click', onBox4)
//   $('#box5').off('click', onBox5)
//   $('#box6').off('click', onBox6)
//   $('#box7').off('click', onBox7)
//   $('#box8').off('click', onBox8)
// }

const victory = function () {
  $('#result').removeClass('hidden')
  $('#result').text('VICTORY!')
  console.log(xCount, oCount)
  for (let i = 0; i < 9; i++) {
    $(`#box${i}`).off()
  }
  // noPlay()
}

const defeat = function () {
  $('#result').removeClass('hidden')
  $('#result').text('DEFEAT!')
  for (let i = 0; i < 9; i++) {
    $(`#box${i}`).off()
  }
  // noPlay()
}

const tie = function () {
  $('#result').removeClass('hidden')
  $('#result').text('ITS A TIE!')
  // noPlay()
}
//
// const emptyGame = ['', '', '', '', '', '', '', '', '']
//
// const onNewGame = function () {
//   store.cells = emptyGame
//   console.log(store.cells)
//   $('.game-board').removeClass('hidden')
//   $('#box0, #box1, #box2, #box3, #box4, #box5, #box6, #box7, #box8').html('')
//   $('#box0').on('click', gameEvents.onBox0)
//   $('#box1').on('click', gameEvents.onBox1)
//   $('#box2').on('click', gameEvents.onBox2)
//   $('#box3').on('click', gameEvents.onBox3)
//   $('#box4').on('click', gameEvents.onBox4)
//   $('#box5').on('click', gameEvents.onBox5)
//   $('#box6').on('click', gameEvents.onBox6)
//   $('#box7').on('click', gameEvents.onBox7)
//   $('#box8').on('click', gameEvents.onBox8)
// }

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
    console.log(xCount, oCount)
    if (xCount === oCount && store.cells[boxNum] === '') {
      store.cells[boxNum] = 'x'
      $(`#box${boxNum}`).text('x')
    } else if (xCount > oCount && store.cells[boxNum] === '') {
      store.cells[boxNum] = 'o'
      $(`#box${boxNum}`).text('o')
    }
    console.log(xCount, oCount)
  }
  victoryCheck()
}

const victoryCheck = function () {
  // victory contains all victory cases
  const victoryCases = ['036', '147', '258', '012', '345', '678', '048', '246']
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
  // turn moves into string coordinates
  const xSort = xArr.sort().join('').toString()
  const oSort = oArr.sort().join('').toString()
  // iterate through victoryCases and check if xcoord includes victoryCases[i]
  for (let i = 0; i < victoryCases.length; i++) {
    if (xSort.includes(victoryCases[i])) {
      console.log('Victory!')
      victory()
    } else if (oSort.includes(victoryCases[i])) {
      console.log('Defeat!')
      defeat()
    }
  }
  // if the game isnt over, but there are still spaces, keep playing, if no spaces
  // its a tie
  if (store.cells.every((i) => { return i !== '' })) {
    console.log('Its a tie!')
    tie()
  } else {
    console.log('keep playing')
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
