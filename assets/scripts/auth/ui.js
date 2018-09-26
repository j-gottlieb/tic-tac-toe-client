const store = require('../store.js')

const signUpSuccess = function (response) {
  $('#display-message').html('')
  $('#sign-up-form').trigger('reset')
  $('#display-message').append(`<p>Success! </p>`)
  $('#display-message').css('color', 'green')
}

const signUpFailure = function () {
  $('#display-message').html('Something went wrong, please try again')
  $('#display-message').css('color', 'red')
  $('#sign-up-form').trigger('reset')
}

const signInSuccess = function (response) {
  $('#display-message').html('')
  $('#sign-in-form').trigger('reset')
  $('#display-message').append(`<p>Success! </p>`)
  $('#display-message').css('color', 'green')
  $('#change-password-form').removeClass('hidden')
  $('#sign-out-form').removeClass('hidden')
  $('.game-stats').removeClass('hidden')
  $('#sign-in-form').addClass('hidden')
  $('#sign-up-form').addClass('hidden')
  store.user = response.user
}

const signInFailure = function () {
  $('#display-message').html('Something went wrong, please try again')
  $('#display-message').css('color', 'red')
  $('#sign-up-form').trigger('reset')
}

const changePasswordSuccess = function (response) {
  $('#display-message').html('')
  $('#change-password-form').trigger('reset')
  $('#display-message').append(`<p>Successfully changed password!</p>`)
  $('#display-message').css('color', 'green')
}

const changePasswordFailure = function () {
  $('#display-message').html('Something went wrong, please try again')
  $('#display-message').css('color', 'red')
  $('#sign-up-form').trigger('reset')
}

const signOutSuccess = function () {
  $('#display-message').html('You have successfully signed out')
  $('#display-message').css('color', 'green')
  $('#change-password-form').addClass('hidden')
  $('#sign-out-form').addClass('hidden')
  $('#sign-in-form').removeClass('hidden')
  $('#sign-up-form').removeClass('hidden')
}

const signOutFailure = function () {
  $('#display-message').html("You aren't signed in!")
  $('#display-message').css('color', 'red')
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
