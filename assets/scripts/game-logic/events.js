const api = require('./api.js')
const ui = require('./ui.js')
// const store = require('../store.js')
// const store = require('../store.js')
// const logic = require('./logic.js')
//
const onGetStats = function () {
  $('#display-message').fadeOut()
  $('.game-board, .result, .pic-container').addClass('hidden')
  $('#get-stats').text('Refresh Game Stats')
  $('#hide-stats, #stats-display').removeClass('hidden')
  $('#stats-display').html(`<p>Loading Game Stats... Please wait.<p>`)
  api.getStats()
    .then(ui.getStatsSuccess)
    .catch(ui.gamesIndexFailure)
}

const hideStats = function () {
  // $('#display-message').fadeIn()
  $('.pic-container').removeClass('hidden')
  $('#get-stats').text('Get Game Stats')
  // console.log('hiding games index')
  $('#hide-stats').addClass('hidden')
  $('#stats-display').addClass('hidden')
  $('#game-board').removeClass('hidden')
}
//
module.exports = {
  onGetStats,
  hideStats
}
