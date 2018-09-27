const store = require('../store.js')

const signUpSuccess = function (response) {
  $('#display-message').html('')
  $('#sign-up-form').trigger('reset')
  $('#display-message').append(`<p>Success! </p>`)
  $('#display-message').css('color', 'green')
  $('#sign-up-btn, #sign-up-form').addClass('hidden')
}

const signUpFailure = function () {
  $('#display-message').html('Something went wrong, please try again')
  $('#display-message').css('color', 'red')
  $('#sign-up-form').trigger('reset')
}

const signInSuccess = function (response) {
  $('#display-message').html('')
  $('#sign-in-form').trigger('reset')
  $('#display-message').css('color', 'green')
  $('#sign-out-form,.game-stats,#change-password-btn,#new-game').removeClass('hidden')
  $('#sign-in-btn,#sign-up-btn,#sign-in-form').addClass('hidden')
  store.user = response.user
  $('#display-message').append(`<p>Welcome, ${store.user.email} </p>`)
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
  // console.log('youre singing out')
  $('#display-message').html('You have successfully signed out')
  $('#display-message').css('color', 'green')
  // console.log('where are my buttons?')
  $('#sign-out-form, #change-password-btn, #change-password-form, #new-game, .game-stats').addClass('hidden')
  $('#sign-in-btn, #sign-up-btn').removeClass('hidden')
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
