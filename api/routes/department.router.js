const router = require('express').Router()

const {
  checkAuth,
  checkAdmin
} = require('../utils')

const {
  createOneDepartment
} = require('../controllers/department.controller')

router
  .post('/', checkAuth, checkAdmin, createOneDepartment)

module.exports = router