const store = require('../store.js')

const newGameSuccess = function (response) {
  $('#game-message').html('')
  $('#game-message').text('New Game Has Begun')
  $('#game-message').css('color', 'green')
  // console.log(response.game.id)
  store.user.id = response.game.id
  console.log(store.user.id)
}

const newGameFailure = function () {
  $('#game-message').text('Please sign in to play or check your internet connection')
}

const getStatsSuccess = function (response) {
  const userGames = []
  const game = response.games
  for (let i = 0; i < response.games.length; i++) {
    if (game[i].over === true) {
      userGames.push(game[i])
    }
  }
  $('#stats-display').append(`<p>Hey, ${store.user.email}! Here are the games you've played:</p>`)
  for (let i = 0; i < userGames.length; i++) {
    $('#stats-display').append(`Game${i + 1}: id:${userGames[i].id}, moves: ${userGames[i].cells}</p>`)
  }
}

module.exports = {
  newGameSuccess,
  newGameFailure,
  getStatsSuccess
}
