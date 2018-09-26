const store = require('../store.js')

const newGameSuccess = function (response) {
  $('#game-message').html('')
  $('#game-message').text('New Game Has Begun')
  $('#display-message').css('color', 'green')
  $('#change-password-form').removeClass('hidden')
  $('#sign-out-form').removeClass('hidden')
  $('#sign-in-form').addClass('hidden')
  $('#sign-up-form').addClass('hidden')
  store.game = response.user
}

const newGameFailure = function () {
  $('#game-message').text('Please sign in to play.')
}

const getStatsSuccess = function (response) {
  console.log(response.game)
  $('#stats-display').text(response.game)
}

module.exports = {
  newGameSuccess,
  newGameFailure,
  getStatsSuccess
}
