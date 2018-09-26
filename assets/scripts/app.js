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
  $('#box0').on('click', gameEvents.onBox0)
  $('#box1').on('click', gameEvents.onBox1)
  $('#box2').on('click', gameEvents.onBox2)
  $('#box3').on('click', gameEvents.onBox3)
  $('#box4').on('click', gameEvents.onBox4)
  $('#box5').on('click', gameEvents.onBox5)
  $('#box6').on('click', gameEvents.onBox6)
  $('#box7').on('click', gameEvents.onBox7)
  $('#box8').on('click', gameEvents.onBox8)
})
