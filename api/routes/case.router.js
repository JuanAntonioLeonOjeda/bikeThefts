const router = require('express').Router()

const {
  checkAuth,
  checkOwner,
  checkAdmin,
  checkOfficer
} = require('../utils')

const {
  getAllCases,
  openCase,
  getOneCase,
  closeCase
} = require('../controllers/case.controller')

router
  .get('/', checkAuth, checkAdmin, getAllCases)
  .post('/me', checkAuth, checkOwner, openCase)
  .get('/:id', checkAuth, checkAdmin, getOneCase)
  .put('/me/closed', checkAuth, checkOfficer, closeCase)

module.exports = router