const store = require('../store.js')

const signUpSuccess = function (response) {
  $('#display-message').html('').hide()
  $('#sign-up-form').trigger('reset')
  $('#display-message').text(`Success!`).fadeToggle().delay(1000).fadeToggle()
  $('#display-message').css('color', 'green')
  $('#sign-up-btn, #sign-up-form').addClass('hidden')
}

const signUpFailure = function () {
  $('#display-message').html('').hide()
  $('#display-message').html('Something went wrong, please try again').fadeToggle().delay(1000).fadeToggle()
  $('#display-message').css('color', 'red')
  $('#sign-up-form').trigger('reset')
}

const signInSuccess = function (response) {
  $('#display-message').html('').hide()
  $('#sign-in-form').trigger('reset')
  $('#display-message').css('color', 'green')
  $('#sign-out-form,.game-buttons,#change-password-btn,#new-game').removeClass('hidden')
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
  $('#sign-up-form, #sign-in-form, #change-password-form').trigger('reset')
  $('#display-message').removeClass('hidden')
  $('#display-message').text(`You have successfully signed out`).fadeToggle().delay(1000).fadeToggle()
  $('#display-message').css('color', 'green')
  // console.log('where are my buttons?')
  $('#sign-out-form, #stats-display, .result, .game-board, #change-password-btn, #change-password-form, #new-game, .game-buttons').addClass('hidden')
  $('#sign-in-btn, #sign-up-btn, .pic-container').removeClass('hidden')
  // console.log('where are my buttons?')
}

const signOutFailure = function () {
  // $('#display-message').html("You aren't signed in!")
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
