const router = require('express').Router()

const authRouter = require('./auth.router')
const userRouter = require('./user.router')
const bikeRouter = require('./bike.router')
const caseRouter = require('./case.router')
const departmentRouter = require('./department.router')

router
  .use('/auth', authRouter)
  .use('/user', userRouter)
  .use('/bike', bikeRouter)
  .use('/case', caseRouter)
  .use('/department', departmentRouter)

module.exports = router