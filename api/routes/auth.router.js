const router = require('express').Router()

const {
  signup,
  officer,
  director,
  login
} = require('../controllers/auth.controller')

router
  .post('/signup', signup)

module.exports = router
