const router = require('express').Router()

const {
  checkAuth,
  checkOwner,
  checkAdmin,
  checkOfficer
} = require('../utils')

const {
  getAllBikes,
  getOneBike
} = require('../controllers/bike.controller')

router
  .get('/', checkAuth, checkOfficer, getAllBikes)
  .get('/:id', checkAuth, checkAdmin, getOneBike)

module.exports = router