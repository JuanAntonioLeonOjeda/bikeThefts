const Sequelize = require('sequelize')
require('dotenv').config()

// const sequelize = new Sequelize(
//   process.env.POSTGRES_DB,
//   process.env.DB_USER,
//   process.env.SECRET, {
//     host: process.env.DB_HOST,
//     dialect: process.env.DB_DIALECT
//   }
// )

const sequelize = new Sequelize(`${process.env.DB_DIALECT}://${process.env.DB_USER}:${process.env.SECRET}@${process.env.DB_URL}`)

module.exports = sequelize