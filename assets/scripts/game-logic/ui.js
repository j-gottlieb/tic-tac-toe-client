const store = require('../store.js')

const newGameSuccess = function (response) {
  $('#game-message').html('')
  $('#game-message').text('New Game Has Begun')
  $('#game-message').css('color', 'green')
  // console.log(response.game.id)
  store.user.id = response.game.id
}

const newGameFailure = function () {
  alert('new game button clicked')
  $('#game-message').text('New Game Has Begun')
}

const getStatsSuccess = function (response) {
  const userGames = []
  const game = response.games
  for (let i = 0; i < response.games.length; i++) {
    if (game[i].over === true) {
      userGames.push(game[i])
    }
  }
  if (userGames.length === 0) {
    $('#stats-display').html('')
    $('#stats-display').append(`<p>Hey, ${store.user.email}! You haven't played any games yet!</p>`)
  } else {
    $('#stats-display').html('')
    $('#stats-display').append(`<p>Hey, ${store.user.email}! Here are the games you've played:</p>`)
    for (let i = 0; i < userGames.length; i++) {
      $('#stats-display').append(`Game${i + 1}: id:${userGames[i].id}, moves: ${userGames[i].cells}</p>`)
    }
  }
}

module.exports = {
  newGameSuccess,
  newGameFailure,
  getStatsSuccess
}
