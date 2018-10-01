const store = require('../store.js')

const newGameSuccess = function (response) {
  $('#game-message').html('')
  $('#game-message').text('New Game Has Begun')
  $('#game-message').css('color', 'green')
  // console.log(response.game.id)
  store.user.id = response.game.id
}

const newGameFailure = function () {
  // alert('new game button clicked')
  $('#game-message').text('New Game Has Begun')
}

const gameOverSuccess = function () {
  // console.log('Game Over')
  $('.top-row').on('click', function () {
    // console.log('game over function running')
  })
}

const getStatsSuccess = function (response) {
  $('#stats-display').html('')
  const userGames = []
  const game = response.games
  for (let i = 0; i < game.length; i++) {
    userGames.push(game[i])
  }
  // console.log(userGames)
  if (userGames.length === 0) {
    $('#stats-display').append(`<p>Hey, ${store.user.email}! You haven't played any games yet!</p>`)
  } else {
    // $('#stats-display').append(`<p>Hey, ${store.user.email}! Here are the games you've played:</p>`)
    // for (let i = 0; i < userGames.length; i++) {
    // $('#stats-display').append(`Game${i + 1}: id:${userGames[i].id}, moves: ${userGames[i].cells}</p>`)
    let completed = 0
    let incompleted = 0
    for (let i = 0; i < userGames.length; i++) {
      if (userGames[i].over === false) {
        incompleted++
      } else {
        completed++
      }
    }
    if (completed > 1 && incompleted > 1) {
      $('#stats-display').append(`Hey, ${store.user.email}!<br><br>You have
      ${completed} complete games and ${incompleted} incomplete games.`)
    } else if (incompleted === 1 && completed === 1) {
      $('#stats-display').append(`Hey, ${store.user.email}!<br><br>You have
        ${completed} complete game and ${incompleted} incomplete game.`)
    } else if (incompleted === 1 && completed > 1) {
      $('#stats-display').append(`Hey, ${store.user.email}!<br><br>You have
        ${completed} complete games and ${incompleted} incomplete game.`)
    } else if (incompleted > 1 && completed === 1) {
      $('#stats-display').append(`Hey, ${store.user.email}!<br><br>You have
        ${completed} complete game and ${incompleted} incomplete games.`)
    } else if (incompleted === 1 && completed === 0) {
      $('#stats-display').append(`Hey, ${store.user.email}!<br><br>You have
        ${completed} complete game and ${incompleted} incomplete games.`)
    } else if (incompleted > 1 && completed === 0) {
      $('#stats-display').append(`Hey, ${store.user.email}!<br><br>You have
        ${completed} complete games and ${incompleted} incomplete games.`)
    } else if (incompleted === 0 && completed === 1) {
      $('#stats-display').append(`Hey, ${store.user.email}!<br><br>You have
        ${completed} complete game and ${incompleted} incomplete games.`)
    } else if (incompleted === 0 && completed > 1) {
      $('#stats-display').append(`Hey, ${store.user.email}!<br><br>You have
        ${completed} complete games and ${incompleted} incomplete games.`)
    }
  }
}

module.exports = {
  newGameSuccess,
  newGameFailure,
  getStatsSuccess,
  gameOverSuccess
}
