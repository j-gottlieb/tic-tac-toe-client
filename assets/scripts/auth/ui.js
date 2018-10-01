const store = require('../store.js')

const emptyGame = ['', '', '', '', '', '', '', '', '']

const signUpSuccess = function (response) {
  $('#display-message').html('').hide()
  $('#sign-up-form').trigger('reset')
  $('#display-message').text(`Success!`).fadeToggle().delay(1000).fadeToggle()
  $('#display-message').css('color', 'green')
  $('#sign-up-btn, #sign-up-form').addClass('hidden')
}

const signUpFailure = function () {
  $('#display-message').html('').hide()
  $('#display-message').html('That username is taken. Please try another').fadeToggle().delay(1000).fadeToggle()
  $('#display-message').css('color', 'red')
  $('#sign-up-form').trigger('reset')
}

const signInSuccess = function (response) {
  console.log(store.cells)
  $('#display-message').html('').hide()
  $('#sign-in-form').trigger('reset')
  $('#display-message').css('color', 'green')
  $('#get-stats, #sign-out-form,.game-buttons,#change-password-btn,#new-game').removeClass('hidden')
  $('#sign-in-btn,#sign-up-btn,#sign-in-form').addClass('hidden')
  store.user = response.user
  $('#display-message').text(`Welcome, ${store.user.email}`).fadeToggle().delay(1000).fadeToggle()
}

const signInFailure = function () {
  $('#display-message').html('').hide()
  $('#display-message').text('Something went wrong, please try again').fadeToggle().delay(1000).fadeToggle()
  $('#display-message').css('color', 'red')
  $('#sign-up-form').trigger('reset')
}

const changePasswordSuccess = function (response) {
  $('#display-message').html('').hide()
  $('#change-password-form').trigger('reset')
  $('#display-message').text(`Successfully changed password!`).fadeToggle().delay(1000).fadeToggle()
  $('#display-message').css('color', 'green')
  $('#change-password-form').addClass('hidden')
}

const changePasswordFailure = function () {
  $('#display-message').html('').hide()
  $('#display-message').text('Something went wrong, please try again').fadeToggle().delay(1000).fadeToggle()
  $('#display-message').css('color', 'red')
  $('#sign-up-form').trigger('reset')
}

const signOutSuccess = function () {
  $('#display-message').html('').hide()
  $('#get-stats').text('Get Game Stats')
  $('#sign-up-form, #sign-in-form, #change-password-form').trigger('reset')
  $('#display-message').removeClass('hidden')
  $('#display-message').text(`You have successfully signed out`).fadeToggle().delay(1000).fadeToggle()
  $('#display-message').css('color', 'green')
  $('#hide-stats, #get-stats, #sign-out-form, #stats-display, .result, .game-board, #change-password-btn, #change-password-form, #new-game, .game-buttons').addClass('hidden')
  $('#sign-in-btn, #sign-up-btn, .pic-container').removeClass('hidden')
  // store.game = null
  store.cells = emptyGame
  for (let i = 0; i < store.cells.length; i++) {
    store.cells[i] = ''
    $(`#box${i}`).css('background-color', '#fff6e5')
    $(`#box${i}`).text('')
  }
}

const signOutFailure = function () {
  // $('#display-message').removeClass('hidden')
  // $('#display-message').html('Something went wrong')
  // $('#display-message').css('color', 'red')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
