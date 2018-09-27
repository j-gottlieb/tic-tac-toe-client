'use strict'
const authEvents = require('./auth/events.js')
const gameEvents = require('./game-logic/events.js')
const gameLogic = require('./game-logic/logic.js')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // auth events
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out-form').on('click', authEvents.onSignOut)
  // game events
  $('#new-game').on('click', gameLogic.onNewGame)
  $('#get-stats').on('click', gameEvents.onGetStats)
  $('#sign-up-btn').on('click', authEvents.onShowSignUp)
  $('#sign-in-btn').on('click', authEvents.onShowSignIn)
})
