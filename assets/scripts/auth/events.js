const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')

const onSignUp = function (event) {
  event.preventDefault()
  const credentials = getFormFields(event.target)
  api.signUp(credentials)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onShowSignUp = function () {
  $('#sign-up-form').trigger('reset')
  $('#sign-up-form').removeClass('hidden')
  $('#sign-in-form').addClass('hidden')
}

const onShowSignIn = function () {
  $('#sign-in-form').trigger('reset')
  $('#sign-in-form').removeClass('hidden')
  $('#sign-up-form').addClass('hidden')
}

const onShowChangePassword = function () {
  $('#change-password-form').removeClass('hidden')
}

const onSignIn = function (event) {
  event.preventDefault()
  const credentials = getFormFields(event.target)
  api.signIn(credentials)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const credentials = getFormFields(event.target)
  api.changePassword(credentials)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  for (let i = 0; i < 9; i++) {
    store.cells[i] = ''
  }
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const hideForms = function () {
  $('#sign-up-form').css('visibility', 'hidden')
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onShowSignUp,
  onShowSignIn,
  onShowChangePassword,
  hideForms
}
