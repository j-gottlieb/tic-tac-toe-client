const config = require('../config.js')
const store = require('../store.js')

const newGame = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const updateGame = function (cells) {
  return $.ajax({
    url: config.apiUrl + `/games/${store.user.id}`,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: {
      'game': cells,
      'over': false
    }
  })
}

const gameOver = function (cells) {
  return $.ajax({
    url: config.apiUrl + `/games/${store.user.id}`,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: {
      'game': {
        'over': true
      }
    }
  })
}

const getStats = function (userId) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

module.exports = {
  newGame,
  getStats,
  updateGame,
  gameOver
}
