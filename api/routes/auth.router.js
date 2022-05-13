const router = require('express').Router()

const {
  checkAuth,
  checkAdmin,
  checkDirector
} = require('../utils')

const {
  signup,
  officer,
  director,
  login
} = require('../controllers/auth.controller')

router
  .post('/signup', signup)
  .post('/officer', checkAuth, checkDirector, officer)
  .post('/director', checkAuth, checkAdmin, director)
  .post('/login', login)

module.exports = router
