const Sequelize = require('sequelize')
require('dotenv').config()

const sequelize = new Sequelize(
  process.env.POSTGRES_DB,
  process.env.DB_USER,
  process.env.SECRET, {
    host: 'localhost',
    dialect: 'postgres'
  }
)

module.exports = sequelize