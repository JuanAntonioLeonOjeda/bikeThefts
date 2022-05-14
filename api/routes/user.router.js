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
  updateOwnProfile,
  getOneUser,
  updateOneUser,
  deleteUser,
  getOwnOpenCase
} = require('../controllers/user.controller')

router
  .get('/', checkAuth, checkAdmin, getAllUsers)
  .get('/me', checkAuth, getOwnProfile)
  .put('/me', checkAuth, updateOwnProfile)
  .get('/:id', checkAuth, checkAdmin, getOneUser)
  .put('/:id', checkAuth, checkAdmin, updateOneUser)
  .delete('/:id', checkAuth, checkAdmin, deleteUser)
  .get('/me/open', checkAuth, getOwnOpenCase)

module.exports = router