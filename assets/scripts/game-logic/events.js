const api = require('./api.js')
const ui = require('./ui.js')
// const store = require('../store.js')
// const store = require('../store.js')
// const logic = require('./logic.js')
//
const onGetStats = function () {
  $('#hide-stats,#stats-display').removeClass('hidden')
  api.getStats()
    .then(ui.getStatsSuccess)
    .catch(ui.gamesIndexFailure)
}

const hideStats = function () {
  console.log('hiding games index')
  $('#hide-stats').addClass('hidden')
  $('#stats-display').addClass('hidden')
}
//
module.exports = {
  onGetStats,
  hideStats
}
