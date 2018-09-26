const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')
// const store = require('../store.js')
// const logic = require('./logic.js')
//
const onGetStats = function () {
  console.log('getting games index')
  api.getStats()
    .then(ui.getStatsSuccess)
    .catch(ui.gamesIndexFailure)
}
//
module.exports = {
  onGetStats
}
