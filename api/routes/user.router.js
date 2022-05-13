const router = require('express').Router()

const {
  checkAuth,
  checkAdmin,
  checkDirector,
  checkOfficer
} = require('../utils')

const {
  getAllUsers
} = require('../controllers/user.controller')

router
  .get('/', checkAuth, checkAdmin, getAllUsers)

module.exports = router