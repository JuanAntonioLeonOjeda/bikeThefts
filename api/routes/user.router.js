const router = require('express').Router()

const {
  checkAuth,
  checkAdmin,
  checkDirector,
  checkOfficer
} = require('../utils')

const {
  getAllUsers,
  getOwnProfile,
  getOneUser,
  updateOwnProfile
} = require('../controllers/user.controller')

router
  .get('/', checkAuth, checkAdmin, getAllUsers)
  .get('/me', checkAuth, getOwnProfile)
  .get('/:id', checkAuth, checkAdmin, getOneUser)
  .put('/me', checkAuth, updateOwnProfile)

module.exports = router