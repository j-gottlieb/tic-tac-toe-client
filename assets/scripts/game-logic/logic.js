const store = require('../store.js')

const game = store.cells
const cells = ['x', 'x', 'x', 'x', 'o', 'x', 'o', '', 'o']

const newGameCheck = function () {
  if (store.cells === undefined) {
    alert('Please start new game.')
  } else {
    return true
  }
}

const emptyGame = ['', '', '', '', '', '', '', '', '']

const onNewGame = function () {
  store.cells = emptyGame
  console.log(store.cells)
  $('.game-board').removeClass('hidden')
}

const onBoxClick = function (boxNum) {
  if (newGameCheck()) {
    let xCount = 0
    let oCount = 0
    // look for all moves and count the number of each
    for (let i = 0; i < store.cells.length; i++) {
      if (store.cells[i] === 'x') {
        xCount++
      } else if (store.cells[i] === 'o') {
        oCount++
      }
    }
    console.log(xCount, oCount)
    if (xCount === oCount) {
      store.cells[boxNum] = 'x'
      $(`#box${boxNum}`).text('x')
      console.log(store.cells[boxNum])
    } else if (xCount > oCount) {
      store.cells[boxNum] = 'o'
      $(`#box${boxNum}`).text('o')
    }
    console.log(xCount, oCount)
    victoryCheck()
  }
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
  if (cells.every((i) => { return i !== '' })) {
    console.log('Its a tie!')
  } else {
    console.log('keep playing')
  }
}

const noPlay = function () {
  $('#box0, #box1, #box2, #box3, #box4, #box5, #box6, #box7, #box8').removeId()
}

const victory = function () {
  $('#victory').removeClass('hidden')
}

const defeat = function () {
  $('#defeat').removeClass('hidden')
}



// console.log(takeTurn(game))

module.exports = {
  onBoxClick,
  onNewGame
}
