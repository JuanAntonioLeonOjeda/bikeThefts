process.stdout.write('\x1B[2J\x1B[0f')

require('dotenv').config()

const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const sequelize = require('./api/database')

const Case = require('./api/models/case.model')
const Bike = require('./api/models/bike.model')

;(async function () {
  try {
    await sequelize.sync()
    console.log('Connection has been established successfully.')
  } catch (error) {
    throw new Error (`Cannot connect to database: ${error}`)
  }
})()

const app = express()

try {
  app
    .use(cors())
    .use(morgan('dev'))
    .use('/api', require('./api/routes'))

    .listen(process.env.PORT)
    console.log('listening on port', process.env.PORT)
} catch (error) {
  throw new Error (`Can't start Express: ${error}`)
}