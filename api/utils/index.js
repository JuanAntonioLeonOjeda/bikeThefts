const jwt = require('jsonwebtoken')
const UserModel = require('../models/user.model')

const checkAuth = (req, res, next) => {
  if (!req.headers.authorization) return res.status(404).send('User not logged in')

  jwt.verify(req.headers.authorization, process.env.TOKEN, async (err, decoded) => {
    if (err) return res.status(500).send('Token not valid')
    const user = await UserModel.findOne({ where: { email: decoded.email } })

    if (!user) return res.status(500).send('Token not valid')
    else {
      res.locals.user = user
    }
    next()
  })
}

const checkAdmin = (req, res, next) => {
  if (res.locals.user.role !== 'admin') {
    res.send('Error: User not authorized')
  } else {
    next()
  }
}

const checkDirector = (req, res, next) => {
  if (res.locals.user.role !== 'director' && res.locals.user.role !== 'admin') {
    res.send('Error: User not authorized')
  } else {
    next()
  }
}

const checkOfficer = (req, res, next) => {
  if (res.locals.user.role === 'owner') {
    res.send('Error: User not authorized')
  } else {
    next()
  }
}

module.exports = {
  checkAuth,
  checkAdmin,
  checkDirector,
  checkOfficer
}