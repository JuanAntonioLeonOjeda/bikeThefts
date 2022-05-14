const router = require('express').Router()

const {
  checkAuth,
  checkOwner
} = require('../utils')

const {
  openCase
} = require('../controllers/case.controller')

router
  .post('/me', checkAuth, checkOwner, openCase)

module.exports = router