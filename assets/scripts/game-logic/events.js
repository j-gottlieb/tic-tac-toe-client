const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')
const logic = require('./logic.js')

const onBox0 = function () {
  logic.onBoxClick(0)
}
const onBox1 = function () {
  logic.onBoxClick(1)
}
const onBox2 = function () {
  logic.onBoxClick(2)
}
const onBox3 = function () {
  logic.onBoxClick(3)
}
const onBox4 = function () {
  logic.onBoxClick(4)
}
const onBox5 = function () {
  logic.onBoxClick(5)
}
const onBox6 = function () {
  logic.onBoxClick(6)
}
const onBox7 = function () {
  logic.onBoxClick(7)
}
const onBox8 = function () {
  logic.onBoxClick(8)
}

module.exports = {
  onBox0,
  onBox1,
  onBox2,
  onBox3,
  onBox4,
  onBox5,
  onBox6,
  onBox7,
  onBox8
}
