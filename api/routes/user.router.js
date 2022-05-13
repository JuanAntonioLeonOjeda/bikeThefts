const router = require('express').Router()

const {
  checkAuth,
  checkAdmin,
  checkDirector,
  checkOfficer
} = require('../utils')

const {
  getAllUsers,
  getOneUser
} = require('../controllers/user.controller')

router
  .get('/', checkAuth, checkAdmin, getAllUsers)
  .get('/:id', checkAuth, checkAdmin, getOneUser)

module.exports = router